pipeline {
    agent any

    tools {
        nodejs 'Node20'
    }

    environment {
        DEPLOY_DIR = '/root/app/akat-BE'
    }

    stages {
        // Stage 1: Checkout & Cài đặt thư viện
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

        // Stage 4: Deploy nội bộ (trên VPS)
        stage('Deploy') {
            when { branch 'master' }
            steps {
                sh """
                    set -e
                    echo "📦 Deploying to ${DEPLOY_DIR} ..."

                    # 1. Tạo thư mục nếu chưa có
                    mkdir -p ${DEPLOY_DIR}

                    # 2. Đồng bộ build output và ecosystem config
                    rsync -avz --delete dist/ ${DEPLOY_DIR}/dist/
                    cp ecosystem.config.js ${DEPLOY_DIR}/

                    # 3. Restart ứng dụng bằng PM2
                    pm2 restart ${DEPLOY_DIR}/ecosystem.config.js 

                    echo "✅ Deployed successfully!"
                """
            }
        }
    }
}
