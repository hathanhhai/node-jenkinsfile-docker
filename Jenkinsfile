pipeline {
    agent any
    stages {
       
        stage('clone'){
            
            steps  {
                git 'https://github.com/hathanhhai/node-jenkinsfile-docker.git'
            }
        }

         stage("docker run app"){
            steps {
             echo "ha thanh hai"
            }
        }
        
        stage('Build docker image'){
            steps{
                script{
                    sh 'docker build -t app-node .'
                }
            }
        }



        stage('Deploy to remote docker host') {
            steps {
                script {
                    sh 'docker stop app-node'
                    sh 'docker rm app-node'
                    sh 'docker run -d -p 3000:3000 app-node '
                }
            }
        }

        
    }
  
}