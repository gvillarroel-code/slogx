pipeline {
    agent any

    stages {
        stage('Fase 1') {
            steps {
                echo 'Paso uno'
            }
        }

        stage('Paso Dos') {
            steps {
                sh 'ls -l /'
                sh './DockerBuild.sh'
                sh 'docker images'
            }
        }

     }
}
