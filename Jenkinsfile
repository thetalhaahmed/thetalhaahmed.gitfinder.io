pipeline{
    agent any

    stages{
        stage("Build"){
            steps{
                git 'https://github.com/thetalhaahmed/thetalhaahmed.gitfinder.io.git'
                bat 'npm install'
            }
        }
    }
}