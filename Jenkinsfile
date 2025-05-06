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

            // Kiểm tra thư mục dist/
            sh 'test -d dist/ || { echo "Thư mục dist/ không tồn tại!"; exit 1; }'

            // Debug: Kiểm tra SSH key
            sh 'ssh-add -l || { echo "Không có SSH key nào được thêm"; }'

            sshagent(credentials: [SSH_CREDENTIALS_ID]) {
                def nvmInit = 'export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh" && source "$NVM_DIR/bash_completion"'

                sh """
                    set -x
                    echo "🔄 Deploying to ${DEPLOY_DIR}..."
                    echo "Thông tin môi trường:"
                    echo "VPS_USER: ${VPS_USER}"
                    echo "VPS_IP: ${VPS_IP}"
                    echo "DEPLOY_DIR: ${DEPLOY_DIR}"

                    # Kiểm tra SSH
                    ssh -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_IP} 'whoami' || { echo "Lỗi khi kết nối SSH"; exit 1; }

                    # Tạo thư mục và gán quyền
                    ssh -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_IP} 'mkdir -p ${DEPLOY_DIR}/dist && chown -R ${VPS_USER} ${DEPLOY_DIR}' || { echo "Lỗi khi tạo thư mục trên VPS"; exit 1; }

                    # Kiểm tra thư mục dist/
                    echo "📦 Nội dung thư mục dist/:"
                    ls -la dist/

                    ssh ${VPS_USER}@${VPS_IP} 'cd ${DEPLOY_DIR} && git pull origin ${env.BRANCH_NAME}' || { echo "Lỗi pull trên VPS"; exit 1; }

                    ssh ${VPS_USER}@${VPS_IP} 'cd ${DEPLOY_DIR} && ${nvmInit} && npm install' || { echo "Lỗi khi cài đặt dependencies trên VPS"; exit 1; }

                    ssh ${VPS_USER}@${VPS_IP} 'cd ${DEPLOY_DIR} && ${nvmInit} && npx prisma migrate dev' || { echo "Lỗi khi migrate Prisma Client trên VPS"; exit 1; }
                    
                    ssh ${VPS_USER}@${VPS_IP} 'cd ${DEPLOY_DIR} && ${nvmInit} && npx prisma generate' || { echo "Lỗi khi generate Prisma Client trên VPS"; exit 1; }

                    ssh ${VPS_USER}@${VPS_IP} 'cd ${DEPLOY_DIR} && ${nvmInit} && npm run build' || { echo "Lỗi khi build trên VPS"; exit 1; }

                    # Copy thư mục dist và file ecosystem.config.js
                    scp -r dist/ ${VPS_USER}@${VPS_IP}:${DEPLOY_DIR}/dist/ || { echo "Lỗi khi scp dist/"; exit 1; }
                    scp ecosystem.config.js ${VPS_USER}@${VPS_IP}:${DEPLOY_DIR}/ || { echo "Lỗi khi scp ecosystem.config.js"; exit 1; }
                    ssh ${VPS_USER}@${VPS_IP} "cp ${DEPLOY_DIR}/.env ${DEPLOY_DIR}/dist/.env"

                    # Chạy PM2 thông qua NVM
                    ssh ${VPS_USER}@${VPS_IP} '${nvmInit} && pm2 list' || { echo "PM2 không tìm thấy"; exit 1; }

                    echo "🚀 Restart ứng dụng..."
                    ssh ${VPS_USER}@${VPS_IP} '${nvmInit} && pm2 restart ${DEPLOY_DIR}/ecosystem.config.js' || { echo "Lỗi restart PM2"; exit 1; }
                    ssh ${VPS_USER}@${VPS_IP} '${nvmInit} && pm2 save' || { echo "Lỗi save PM2"; exit 1; }

                    echo "📋 Logs ứng dụng:"
                    ssh ${VPS_USER}@${VPS_IP} '${nvmInit} && pm2 logs --lines 50 --nostream' || { echo "Lỗi logs PM2"; exit 1; }
                """
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