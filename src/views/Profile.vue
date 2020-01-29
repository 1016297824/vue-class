<template>
  <div>
    <h1>
      Profile
    </h1>
    <h2>
      {{ $route.query.name }}
    </h2>
    <h2>
      {{ $route.query.age }}
    </h2>
    <h2>
      {{ $route.query.height }}
    </h2>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
