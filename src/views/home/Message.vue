<template>
  <div id="message">
    <ul>
      <li v-for="(item, index) in message" :key="index">
        {{ index + 1 + "." + item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      message: ["m1", "m2", "m3"]
    };
  }
};
</script>

<style scoped></style>
