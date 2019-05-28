<template>
    <div>
      <h1>这是account组件</h1>
      <router-link to="login">login</router-link>
      <router-link to="register">register</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'account'
}
</script>

<style scoped>

</style>
