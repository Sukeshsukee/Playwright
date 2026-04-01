pipeline {
    agent any

    tools {
        nodejs 'node18'  // Make sure this matches your NodeJS version configured in Jenkins
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'feature-branch',
                url: 'https://github.com/Sukeshsukee/Playwright.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'  // Use 'sh' if your Jenkins runs on Linux/macOS
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
            }
        }
    }
}