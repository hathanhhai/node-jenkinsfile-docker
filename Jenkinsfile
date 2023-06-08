pipeline {
    agent any
    stages {
       
        stage('clone'){
            
            steps  {
                git 'https://github.com/hathanhhai/node-jenkinsfile-docker.git'
            }
        }
        
        stage("build"){
            agent {
                docker {
                    image 'node:14-buster'
                }
            }
            steps {
              echo 'hà Thanh Hải'
            } 
            // steps {
            //    sh 'docker build -t app-node .'
            // }
        }
        // stage("docker run app"){
        //     steps {
        //        sh 'docker run -p 3000:3000 app-node'
        //     }
        // }
    }
  
}