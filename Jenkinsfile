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
                    sh 'docker build -t app-node:current .'
                }
            }
        }



        stage('Deploy to remote docker host') {
            steps {
                script {
                    // sh 'docker ps -q --filter "name=$name" | xargs -r docker stop'
                    // sh 'docker ps -aq --filter "name=$name" | xargs -r docker rm'
                    // sh 'docker rmi app-node:current'
                    // sh 'docker tag app-node antonml/node-demo:current'
                    sh 'docker run -d --name app-node -p 3000:3000 app-node:current'
                }
            }
        }

        
    }
  
}