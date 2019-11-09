<template>
  <div class="jumbotron">
    <h1 class="display-5">
      <span class="text-primary">Expense Application</span>
    </h1>
    <p class="lead">This is a simple, yet functional expense submission form.</p>
    <p class="lead">Developed as TDD and deployed to Cloud via CI/CD Pipeline!</p>
    <hr class="my-4" />

    <h4>Built with following technologies</h4>
    <ul class="list-group">
      <li class="list-group-item list-group-item-primary">
        <b>Front End:</b> Vue.js + VUEX for store management + Bootstrap + Jest Unit Testing
      </li>
      <li class="list-group-item list-group-item-info">
        <b>Back End:</b> ASP.Net MVC Core, serves the compiled vuejs client pages and secure calls to REST Apis (No CORS)
      </li>
      <li class="list-group-item list-group-item-primary">
        <b>Back End - REST Api:</b> ASP.Net Core 2.2 + Dapper for data access + xUnit Test with Moq
      </li>
      <li class="list-group-item list-group-item-info">
        <b>Database:</b> SQL Server
      </li>
      <li class="list-group-item list-group-item-primary">
        <b>Deployment:</b> Github + CI/CD: Continuous deploment to Azure Cloud
      </li>
      <li class="list-group-item list-group-item-info">
        <b>Hosting:</b> Azure Cloud hosts application, api and sql database
      </li>
    </ul>
    <p></p>
    <p class="lead">
      <router-link class="btn btn-primary btn-lg" to="/about">Learn more</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {}
}
</script>
