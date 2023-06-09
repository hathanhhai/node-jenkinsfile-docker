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
                sh 'docker build -t app-node/test:v1 . '
                
            }
        }

        stage('Docker login'){
            steps{
                sh ' echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                
            }
        }

        stage('Docker psuh'){
            steps{
                  withDockerRegistry([credentialsId: "docker-hub", url: "https://index.docker.io/v1/"]) {
                    sh "docker push app-node/test:v1"
                }  

                //  withCredentials([usernamePassword( credentialsId: 'docker-hub-credentials', usernameVariable: 'USER', passwordVariable: 'PASSWORD')]) {
                //     def registry_url = "registry.hub.docker.com/"
                //     sh "docker login -u $USER -p $PASSWORD ${registry_url}"
                //     docker.withRegistry("http://${registry_url}", "docker-hub") {
                //         // Push your image now
                //         sh "docker push username/foldername:build"
                //     }
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