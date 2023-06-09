pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('docker-hub')
    }
    stages {
       
        stage('clone'){
            
            steps  {
                git 'https://github.com/hathanhhai/node-jenkinsfile-docker.git'
            }
        }

       
        stage('Build docker image'){
            steps{
                sh 'docker build -t node_test . '
                
            }
        }

        // stage('Docker login'){
        //     steps{
        //         sh ' echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                
        //     }
        // }

        stage('Docker push'){
             steps {
                withDockerRegistry([credentialsId: "docker-hub", url: "https://index.docker.io/v1/"]) {
                    sh 'docker tag node_test hathanhhai/node_test:v1'
                    sh "docker push hathanhhai/node_test:v1"
                }
            }
        }




        stage('Deploy to remote docker host') {
            steps {
                
                script {
                    sh 'docker pull hathanhhai/node_test:v1'
                    sh 'docker stop node_test|| true'
                    sh 'docker rm -f node_test|| true'
                    sh 'docker run -d -p 3000:3000 node_test '
                }
            }
        }

        
    }
  
}