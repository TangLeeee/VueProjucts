<!-- 各种组件模板入口文件，在main.js中导入各种模板组件后，可直接拿来使用，
也可以在script中按需导入，
注意App.vue会替换掉<div id="app">的所有内容 -->
<template>
  <div>
    <h1>这是app组件</h1>
    <router-link to="/account">account</router-link>
    <router-link to="/goodlist">goodlist</router-link>
    <router-view></router-view>
    <mt-button @click="show">button</mt-button>
    <button type="button" class="mui-btn mui-btn-royal">
      紫色
    </button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  name: 'App',
  data () {
    return {
      toastInstance: null
    }
  },
  created () {
    // this.getlist()
  },
  methods: {
    getlist () {
      this.show()
      setTimeout(() => this.toastInstance.close(), 3000)
    },
    show () {
      this.toastInstance = Toast({
        message: '爱你mua~',
        duration: 1500,
        position: 'top',
        iconClass: 'glyphicon glyphicon-heart',
        className: 'mytoast'
      })
    }
  }
}
</script>

<style>

</style>
