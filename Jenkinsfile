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

         stage("docker run app"){
            steps {
             echo "ha thanh hai"
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
                    sh 'docker login -u "hathanhhai" -p "Thanhhaiqw1" docker.io'
                    sh 'docker tag node_test hathanhhai/node/test:v1'
                    sh "docker push hathanhhai/node/test:v1"
                // withDockerRegistry([credentialsId: "docker-hub", url: "https://index.docker.io/v1/"]) {
                //     sh "docker push app-node/test:v1"
                // }
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