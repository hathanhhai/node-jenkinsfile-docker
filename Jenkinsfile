pipeline {
    agent any
    stages {
       
        stage('clone'){
            steps  {
                git 'https://github.com/hathanhhai/node-jenkinsfile-docker.git'
            }
        }
        stage("build"){
            steps {
               sh 'docker build -t app-node .'
            }
        }
        stage("docker run app"){
            steps {
               sh 'docker run -p 3001:3001 --name app-node -d'
            }
        }
    }
  
}