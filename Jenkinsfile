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
                    withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                        sh 'docker build -t app-node/test:v1 . '
                        sh 'docker push  app-node/test:v1 '

                    }
            }
        }



        stage('Deploy to remote docker host') {
            steps {
                
                script {
                    sh 'docker stop app-node || true'
                    sh 'docker rm app-node || true'
                    sh 'docker run -d -p 3000:3000 app-node '
                }
            }
        }

        
    }
  
}