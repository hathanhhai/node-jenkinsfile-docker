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
        stage("run app"){
            steps {
               sh 'docker run -i -p 3000:3000 app-node'
            }
        }

         stage("Done"){
            steps {
                echo "Done"
            }
        }

        
    }
  
}