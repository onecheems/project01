<template>
  <div>控制台{{ $route.query.userId }}</div>
  <div>{{ userId }}</div>
  <el-button @click="logout">退出</el-button>
</template>
<script>
import { onMounted } from 'vue'
import {useRouter, useRoute} from 'vue-router'
export default {
  name: 'HomeComp',
  props: ['userId'],
  setup() {
    const router = useRouter()
    const route = useRoute()

    onMounted(() => {
      console.log(route.query)
    })


    function logout() {
      // 跳转到登录页
      router.push({ name: 'main'})
    }

    return {
      logout
    }
  }
}
</script>