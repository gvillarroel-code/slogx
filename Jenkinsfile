pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }

        stage('Dos') {
            steps {
                sh 'ls -l /'
                sh './DockerBuild.sh'
                sh 'docker images'
            }
        }

     }
}
