<template>
  <div id="news">
    <ul>
      <li v-for="(item, index) in news" :key="index">
        {{ index + 1 + "." + item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      news: ["zk1", "zk2", "zk3"]
    };
  }
};
</script>

<style scoped></style>
