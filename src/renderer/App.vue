<script setup lang="ts">
import Phone from './components/Phone/index.vue'
import BottomTools from './components/BottomTools/index.vue'
import Test from './components/Test.vue'

import { userStore } from './store/user'

// 1. 初始化手机号
const user = userStore()
user.register(); // 注册手机号

// 2. 连接 socket
import '@/utils/socket'

</script>

<template>
  <div class="container" id="phoneContainer">
    <router-view/>
  </div>
</template>

<style >

</style>
