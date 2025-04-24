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
                        sh """
                            set -x  # Bật chế độ debug
                            echo "🔄 Đang deploy lên ${DEPLOY_DIR}..."
                            echo "Thông tin môi trường:"
                            echo "VPS_USER: ${VPS_USER}"
                            echo "VPS_IP: ${VPS_IP}"
                            echo "DEPLOY_DIR: ${DEPLOY_DIR}"

                            # Debug: Kiểm tra SSH connection
                            ssh -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_IP} 'whoami' || { echo "Lỗi khi kết nối SSH"; exit 1; }

                            # 1. Đảm bảo thư mục tồn tại và đúng quyền
                            ssh -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_IP} 'mkdir -p ${DEPLOY_DIR}/dist && chown -R \$(whoami) ${DEPLOY_DIR}' || { echo "Lỗi khi tạo thư mục trên VPS"; exit 1; }

                            # 2. Kiểm tra file build
                            echo "📦 Nội dung thư mục dist/:"
                            ls -la dist/

                            # 3. Sao chép thư mục dist/ bằng scp (thay rsync)
                            scp -r dist/ ${VPS_USER}@${VPS_IP}:${DEPLOY_DIR}/dist/ || { echo "Lỗi khi scp thư mục dist/"; exit 1; }

                            # 4. Sao chép file ecosystem.config.js
                            scp ecosystem.config.js ${VPS_USER}@${VPS_IP}:${DEPLOY_DIR}/ || { echo "Lỗi khi scp ecosystem.config.js"; exit 1; }

                            # 5. Kiểm tra và restart PM2
                            echo "🔄 Danh sách ứng dụng PM2:"
                            ssh ${VPS_USER}@${VPS_IP} 'pm2 list' || { echo "Lỗi khi liệt kê PM2"; exit 1; }

                            echo "🚀 Khởi động lại ứng dụng..."
                            ssh ${VPS_USER}@${VPS_IP} 'pm2 restart ${DEPLOY_DIR}/ecosystem.config.js' || { echo "Lỗi khi restart PM2"; exit 1; }
                            ssh ${VPS_USER}@${VPS_IP} 'pm2 save' || { echo "Lỗi khi lưu PM2"; exit 1; }

                            echo "📋 Logs ứng dụng:"
                            ssh ${VPS_USER}@${VPS_IP} 'pm2 logs' || { echo "Lỗi khi xem logs PM2"; exit 1; }
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