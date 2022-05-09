<script  lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup () {
    const helloworld = ref<InstanceType<typeof HelloWorld>|null>(null)
    onMounted(() => {
      console.log(helloworld.value)
    })
    return {
      helloworld
    }
  }
})
</script>

<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <HelloWorld ref="title" msg="Hello Vue 3 + TypeScript + Vite+123" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
