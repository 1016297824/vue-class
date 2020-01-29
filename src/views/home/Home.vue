<template>
  <div class="home">
    <h1>Home</h1>
    <router-link to="/home/news">News</router-link>|
    <router-link to="/home/message">Message</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped></style>
