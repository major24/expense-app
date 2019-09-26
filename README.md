
# AspCoreMvc-VueJS-Template
Asp MVC acts as server for VueJS client side script. Contains sample REST get api call

## How to run

## First run the REST api in the background
  Build and publish
  Copy the published folder/files + settingup doc into a directory.
  Run api: run using 'dotnet ./transactions.dll' in the command line
  Should be able to access https://localhost:5001/api/...
  
## Open Vue JS client and build
  $ npm run build
  This should build and deploy under server-mvc/wwwroot/dist folder

## In Visual Studio, Open server-mvc project and run
  Debug or dotnet run 
  This should run the web app. Home page should render what the vue page contains...
  Vue page has two buttons to get REST api data. upon clicking should return api data
=======
# expense-app
AspCoreMVC server and VUEJS client app to submit credit card and OOP expenses

