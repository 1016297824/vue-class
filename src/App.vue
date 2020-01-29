<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <!-- <input type="button" value="Home" @click="homeClick" />
      <input type="button" value="About" @click="aboutClick" />-->

      <!-- <router-link :to="'/user/' + userId">User</router-link>|
      <router-link
        :to="{ path: '/profile', query: { name: 'zk', age: 23, height: 1.71 } }"
        >Profile</router-link
      > -->

      <!-- <br />
      <input type="button" value="Home" @click="cHome" />
      <input type="button" value="About" @click="cAbout" /> -->

      <input type="button" value="User" @click="cUser" />
      <input type="button" value="Profile" @click="cProfile" />
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "zk"
    };
  },
  methods: {
    homeClick: function() {
      this.$router.push("/home");
    },
    aboutClick: function() {
      this.$router.push("/about");
    },

    // cHome: function() {},
    // cAbout: function() {},

    cUser: function() {
      this.$router.push("/user/" + this.userId);
    },
    cProfile: function() {
      this.$router.push({
        path: "/profile",
        query: {
          name: "zk",
          age: 23,
          height: 1.71
        }
      });
    }
  }
};
</script>
