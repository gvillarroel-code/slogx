pipeline {
    agent any

    stages {
        stage('Fase 1') {
            steps {
                echo 'Hello World'
            }
        }

        stage('Fase Dos') {
            steps {
                sh 'ls -l /'
                sh './DockerBuild.sh'
                sh 'docker images'
            }
        }

     }
}
