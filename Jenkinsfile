pipeline {
    agent any

    tools {
        nodejs 'Node20'
    }

    environment {
        DEPLOY_DIR = '/var/www/akat-BE' // Thư mục deploy trên VPS
        SSH_CREDENTIALS_ID = 'vps-ssh-key' // ID của SSH credentials trên Jenkins
        VPS_USER = 'root' // Người dùng trên VPS
        VPS_IP = '103.82.24.164' // Địa chỉ IP của VPS
    }

    stages {
        stage('Kiểm tra trước deploy') {
            steps {
                sh """
                    echo "📌 Thư mục hiện tại: \$(pwd)"
                    echo "📌 Nội dung thư mục workspace:"
                    ls -la
                """
            }
        }

        stage('Checkout & Setup') {
            steps {
                script {
                    // Checkout mã nguồn từ SCM (Git)
                    checkout scm

                    // Debug: In trạng thái Git để kiểm tra
                    sh 'git status'
                    sh 'git branch -a'

                    // Thiết lập BRANCH_NAME
                    env.BRANCH_NAME = env.BRANCH_NAME ?: (env.GIT_BRANCH ? env.GIT_BRANCH.replace('origin/', '') : sh(script: 'git rev-parse --abbrev-ref HEAD', returnStdout: true).trim())
                    echo "Branch hiện tại là: ${env.BRANCH_NAME}"

                    // Kiểm tra nếu BRANCH_NAME là HEAD
                    if (env.BRANCH_NAME == 'HEAD') {
                        error "Repository ở trạng thái detached HEAD. Vui lòng kiểm tra cấu hình SCM hoặc branch."
                    }
                }
                // Cài đặt thư viện
                sh 'npm ci'
            }
        }

        stage('Lint & Test') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build' // Build ra thư mục dist/
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
            }
        }

stage('Deploy') {
    when {
        expression { env.BRANCH_NAME == 'master' }
    }
    steps {
        script {
            echo "Deploying on branch: ${env.BRANCH_NAME}"

            sh 'test -d dist/ || { echo "Thư mục dist/ không tồn tại!"; exit 1; }'
            sh 'ssh-add -l || { echo "Không có SSH key nào được thêm"; }'

            sshagent(credentials: [SSH_CREDENTIALS_ID]) {
                def pm2Path = "/root/.nvm/versions/node/v20.16.0/bin/pm2"

                // 1. Tạo thư mục và phân quyền
                sh """
                    set -x
                    echo "🔄 Deploying to ${DEPLOY_DIR}..."
                    ssh -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_IP} 'whoami'
                    ssh -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_IP} 'mkdir -p ${DEPLOY_DIR}/dist && chown -R ${VPS_USER} ${DEPLOY_DIR}'
                """

                // 2. SCP source + ecosystem
                sh """
                    echo "📦 Nội dung dist/"
                    ls -la dist/
                    scp -r dist/ ${VPS_USER}@${VPS_IP}:${DEPLOY_DIR}/dist/
                    scp ecosystem.config.js ${VPS_USER}@${VPS_IP}:${DEPLOY_DIR}/
                """

                // 3. Restart PM2
                sh "ssh ${VPS_USER}@${VPS_IP} '${pm2Path} list' || { echo 'PM2 không tìm thấy'; exit 1; }"
                sh "ssh ${VPS_USER}@${VPS_IP} '${pm2Path} restart ${DEPLOY_DIR}/ecosystem.config.js'"
                sh "ssh ${VPS_USER}@${VPS_IP} '${pm2Path} save'"
                sh "ssh ${VPS_USER}@${VPS_IP} '${pm2Path} logs --lines 50'"
            }
        }
    }
}

    }

    post {
        always {
            echo "Pipeline hoàn tất."
        }
        success {
            echo "Deploy thành công trên branch ${env.BRANCH_NAME}!"
        }
        failure {
            echo "Pipeline thất bại. Vui lòng kiểm tra log để biết chi tiết."
        }
    }
}