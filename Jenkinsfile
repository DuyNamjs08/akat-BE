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
                    // Nếu dùng Multibranch Pipeline, nó sẽ tự động checkout branch tương ứng
                    checkout scm

                    // Debug: In trạng thái Git để kiểm tra
                    sh 'git status'
                    sh 'git branch -a'

                    // Thiết lập BRANCH_NAME từ SCM hoặc Git
                    // Ưu tiên env.BRANCH_NAME (từ Multibranch Pipeline), sau đó là GIT_BRANCH, cuối cùng là lệnh git
                    env.BRANCH_NAME = env.BRANCH_NAME ?: (env.GIT_BRANCH ? env.GIT_BRANCH.replace('origin/', '') : sh(script: 'git rev-parse --abbrev-ref HEAD', returnStdout: true).trim())
                    echo "Branch hiện tại là: ${env.BRANCH_NAME}"

                    // Kiểm tra nếu BRANCH_NAME vẫn là HEAD, báo lỗi
                    if (env.BRANCH_NAME == 'HEAD') {
                        error "Repository ở trạng thái detached HEAD. Vui lòng kiểm tra cấu hình SCM hoặc branch."
                    }
                }
                // Cài đặt thư viện
                sh 'npm ci'
            }
        }

        // Stage: Kiểm tra chất lượng mã nguồn
        stage('Lint & Test') {
            steps {
                sh 'npm run lint'
            }
        }

        // Stage: Build
        stage('Build') {
            steps {
                sh 'npm run build' // Build ra thư mục dist/
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
            }
        }

        // Stage: Deploy nội bộ (trên VPS)
        stage('Deploy') {
            when {
                expression { env.BRANCH_NAME == 'master' }
            }
            steps {
                script {
                    echo "Branch hiện tại là: ${env.BRANCH_NAME}"

                    // Kiểm tra thư mục dist/ trước khi deploy
                    sh 'test -d dist/ || { echo "Thư mục dist/ không tồn tại!"; exit 1; }'

                    sshagent(credentials: [SSH_CREDENTIALS_ID]) {
                        sh """
                            set -x  # Bật chế độ debug
                            echo "🔄 Đang deploy lên ${DEPLOY_DIR}..."
                            echo "Thông tin môi trường:"
                            echo "VPS_USER: ${VPS_USER}"
                            echo "VPS_IP: ${VPS_IP}"
                            echo "DEPLOY_DIR: ${DEPLOY_DIR}"

                            # 1. Đảm bảo thư mục tồn tại và đúng quyền
                            ssh -o StrictHostKeyChecking=no ${VPS_USER}@${VPS_IP} 'mkdir -p ${DEPLOY_DIR} && chown -R \$(whoami) ${DEPLOY_DIR}'

                            # 2. Kiểm tra file build
                            echo "📦 Nội dung thư mục dist/:"
                            ls -la dist/

                            # 3. Đồng bộ file với output chi tiết
                            rsync -avz --delete --progress dist/ ${VPS_USER}@${VPS_IP}:${DEPLOY_DIR}/dist/
                            scp ecosystem.config.js ${VPS_USER}@${VPS_IP}:${DEPLOY_DIR}/

                            # 4. Kiểm tra và restart PM2
                            echo "🔄 Danh sách ứng dụng PM2:"
                            ssh ${VPS_USER}@${VPS_IP} 'pm2 list'

                            echo "🚀 Khởi động lại ứng dụng..."
                            ssh ${VPS_USER}@${VPS_IP} 'pm2 restart ${DEPLOY_DIR}/ecosystem.config.js'
                            ssh ${VPS_USER}@${VPS_IP} 'pm2 save'

                            echo "📋 Logs ứng dụng:"
                            ssh ${VPS_USER}@${VPS_IP} 'pm2 logs'
                        """
                    }
                }
            }
        }
    }
}