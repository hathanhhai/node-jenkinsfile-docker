pipeline {
    agent any
    stages {
       
        stage('clone'){
            steps  {
                git 'https://github.com/hathanhhai/node-jenkinsfile-docker.git'
            }
        }
        //  stage("test"){
        //     steps {
        //        sh 'node --version'
        //     }
        // }
        stage("build"){
            steps {
               echo 'Testing..11'
            }
        }
        stage("docker run app"){
            steps {
            //    sh 'docker run -p 3000:3000 app-node'
            }
        }
    }
  
}