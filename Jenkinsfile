node {
    def commit_id
    stage('clone'){
            steps {
                git 'https://github.com/hathanhhai/node-jenkinsfile-docker.git'
            }
    }
    stage("docker build push"){
            docker.withRegistry('https://index.docker.io/v1/','dockerhub') {
                def app = docker.build("hathanhhai/node-jenkins-docker:${commit_id}", '.').push()
            }
    }
}