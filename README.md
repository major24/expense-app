
# AspDotNetCoreMvc + Vue.js - Expense Submission App
## Built with:
  AspNetCoreMvc for backend
  Vue.js and VUEX for store management
  Bootstrap

## How to run
### Requires REST Api to fetch data from Sql Server. Run Expense Api REST api in the background
  (NOT PART OF THIS PKG)

### To run in development mode...
  * Open Expense API app using visual studio 2019 and run in IIS mode
  * Open Server-Mvc app using visual studio 2019 and run IIS mode
  * It should display the app. Vuejs code is already complied and saved to wwwroot folder in server-mvc

### How to debug and edit the app
  Open client-vue in visual studio CODE. make changes

  * Open terminal and navigate to root folder
  * $ ~/Documents/projects/dotnet-core/expense-app
  * $ npm run build:client    (This will build the vuejs app and save pkg under server-mvc/wwwroot folder)

### Hot to run in production mode
  * Set the REST API endpoint in config. If may run from :5001 or Azure site
  * Build the api app and run the api using $ dotnet run command form published folder
  * $ dotnet ./expense-api.dll
  * Should be able to access https://localhost:5001/api/.....
