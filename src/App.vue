<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">MyAssets</router-link> |
      <router-link to="/">Add Assets</router-link> |
      <router-link to="/">Assets Details </router-link> |
      <router-link to="/">Report Problems </router-link> |
      <router-link to="/">Edit Forms </router-link> |
      <router-link to="/">Yoklerk</router-link> |

</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>
