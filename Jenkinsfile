pipeline {
    agent any
    stages {
         stage('clone'){
            steps {
                git 'https://github.com/hathanhhai/node-jenkinsfile-docker.git'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
    }
  
}