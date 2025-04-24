pipeline {
    agent any

    tools {
        nodejs 'Node20'
    }

    environment {
        DEPLOY_DIR = '/var/www/akat-BE' // Thư mục deploy trên VPS, thay đổi nếu cần
        SSH_CREDENTIALS_ID = 'vps-ssh-key' // ID của SSH credentials trên Jenkins
        VPS_USER = 'root' // Người dùng trên VPS, thay đổi nếu cần
        VPS_IP = '103.82.24.164' // Địa chỉ IP của VPS, thay đổi nếu cần
    }

    stages {
        stage('Kiểm tra trước deploy') {
            steps {
                sh """
                    echo "📌 Thư mục hiện tại: \$(pwd)"
                    echo "📌 Nội dung thư mục ${DEPLOY_DIR}:"
                    ls -la ${DEPLOY_DIR}/
                """
            }
        }

        stage('Checkout & Pull Code') {
            steps {
                script {
                    // Pull code mới nhất từ Git repository nếu đã có thư mục
                    if (fileExists(DEPLOY_DIR)) {
                        dir(DEPLOY_DIR) {
                            sh 'git pull origin master'
                        }
                    } else {
                        // Nếu chưa có thư mục, checkout từ git
                        checkout scm
                    }
                }
                // Cài đặt thư viện sau khi pull code
                sh 'npm ci'
            }
        }

        // Stage 2: Kiểm tra chất lượng mã nguồn
        stage('Lint & Test') {
            steps {
                sh 'npm run lint'
            }
        }

        // Stage 3: Build
        stage('Build') {
            steps {
                sh 'npm run build' // build ra thư mục dist/
                archiveArtifacts artifacts: 'dist/**/*', fingerprint: true
            }
        }
        stage('Kiểm tra branch') {
            steps {
                script {
                    // In giá trị của BRANCH_NAME để kiểm tra
                    echo "Giá trị của BRANCH_NAME là: ${env.BRANCH_NAME}"
                    
                    // Kiểm tra điều kiện nếu BRANCH_NAME có giá trị
                    if (env.BRANCH_NAME) {
                        echo "Branch đang sử dụng là: ${env.BRANCH_NAME}"
                    } else {
                        echo "Biến BRANCH_NAME không có giá trị hoặc không tồn tại!"
                    }
                }
            }
        }
        stage('Set Branch Name') {
            steps {
                script {
                    env.BRANCH_NAME = env.BRANCH_NAME ?: sh(script: 'git rev-parse --abbrev-ref HEAD', returnStdout: true).trim()
                    echo "Branch hiện tại là: ${env.BRANCH_NAME}"
                }
            }
        }
        // Stage 4: Deploy nội bộ (trên VPS)
        stage('Deploy') {
            steps {
                script {
                    echo "Branch hiện tại là: ${env.BRANCH_NAME}"
                    
                    // Điều kiện kiểm tra branch có phải là master không
                    if (env.BRANCH_NAME == 'master') {
                        sshagent(credentials: [SSH_CREDENTIALS_ID]) { // Sử dụng SSH key từ Jenkins Credentials
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
                    } else {
                        echo "📌 Bỏ qua deploy vì không phải branch master"
                    }
                }
            }
        }
    }
}
