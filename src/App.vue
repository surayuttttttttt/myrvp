<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">MyAssets</router-link> |
      <router-link to="/AddAssets">Add Assets</router-link> |
      <router-link to="/AssetsDetails">Assets Details </router-link> |
      <router-link to="/ReportProblems">Report Problems </router-link> |
      <router-link to="/EditForms">Edit Forms </router-link> |
      <router-link to="/Yoklerk">Yoklerk</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "App",

  components: {
   
  },

  data: () => ({
    //
  })
};
</script>
