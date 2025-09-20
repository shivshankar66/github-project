pipeline {
    agent any

    environment {
        REGISTRY = "shivam193"
        BACKEND_IMAGE = "${REGISTRY}/backend-app"
        FRONTEND_IMAGE = "${REGISTRY}/frontend-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/shivshankar66/github-project.git', branch: 'main'
            }
        }

        stage('Backend Build & Test') {
            steps {
                dir('backend') {
                    bat 'npm ci'
                    bat 'npm test'
                    bat "docker build -t %BACKEND_IMAGE%:%BUILD_NUMBER% ."
                    bat "docker push %BACKEND_IMAGE%:%BUILD_NUMBER%"
                }
            }
        }

        stage('Frontend Build & Test') {
            steps {
                dir('frontend') {
                    bat 'npm ci'
                    bat 'npm test'
                    bat "docker build -t %FRONTEND_IMAGE%:%BUILD_NUMBER% ."
                    bat "docker push %FRONTEND_IMAGE%:%BUILD_NUMBER%"
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                bat "kubectl apply -f k8s/deployment.yml"
                bat "kubectl apply -f k8s/service.yml"
            }
        }
    }
}
