node {
	stage ('Checkout git repo') {
		git branch: 'master', url: 'https://github.com/major24/expense-app.git'
	}
	stage('Restore Packages') {
		dir ("server-mvc") {
			bat "dotnet restore"
		}
	}
	stage('Clean project') {
		dir ("server-mvc") {
			bat "dotnet clean"
		}
	}
	stage('Build project') {
		bat "dotnet build"
	}
	stage('Run xUnit test') {
		bat "dotnet test"
	}
	stage('Publish project') {
		dir("server-mvc") {
			bat "dotnet publish -c Production -o C:\\temp\\server-mvc-deployed"
		}
	}
}
