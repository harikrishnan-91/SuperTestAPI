pipeline {
    agent any

    tools {
        nodejs 'Node 20'  // Name of the NodeJS installation you configured
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'npm test'  // Run Supertest or any other tests
                }
            }
        }
    }
}
