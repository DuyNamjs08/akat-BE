pipeline {
    agent any

    tools {
        nodejs 'Node20'
    }

    environment {
        DEPLOY_DIR = '/root/app/akat-BE'
    }

    stages {
        stage('Kiểm tra trước deploy') {
    steps {
        sh """
            echo "📌 Thư mục hiện tại: \$(pwd)"
            echo "📌 Nội dung thư mục ${DEPLOY_DIR}:"
            ls -la ${DEPLOY_DIR}/
            echo "📌 Danh sách PM2:"
            pm2 list
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

        // Stage 4: Deploy nội bộ (trên VPS)
        stage('Deploy') {
    when { branch 'master' }
    steps {
        sh """
            set -x  # Bật chế độ debug
            echo "🔄 Đang deploy lên ${DEPLOY_DIR}..."
            
            # 1. Đảm bảo thư mục tồn tại và đúng quyền
            mkdir -p ${DEPLOY_DIR}
            chown -R \$(whoami) ${DEPLOY_DIR}
            
            # 2. Kiểm tra file build
            echo "📦 Nội dung thư mục dist/:"
            ls -la dist/
            
            # 3. Đồng bộ file với output chi tiết
            rsync -avz --delete --progress dist/ ${DEPLOY_DIR}/dist/
            cp -v ecosystem.config.js ${DEPLOY_DIR}/
            
            # 4. Kiểm tra và restart PM2
            echo "🔄 Danh sách ứng dụng PM2:"
            pm2 list
            
            echo "🚀 Khởi động lại ứng dụng..."
            pm2 restart ${DEPLOY_DIR}/ecosystem.config.js --update-env
            pm2 save
            
            echo "📋 Logs ứng dụng:"
            pm2 logs
        """
    }
}
    }
}
