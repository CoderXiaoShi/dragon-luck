<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

let links = [
    { title: '抽奖', path: '/Company/index' },
    { title: '设置', path: '/Company/setting' },
    { title: '员工列表', path: '/Company/participant' },
    { title: '抽奖结果', path: '/Company/result' },
]

const goTo = (str) => {
    router.push(str);
}

</script>
<template>

    <div class="nav">
        <el-button
            v-for="item of links" 
            :key="item.path" 
            @click="goTo(item.path)" 
            :type="route.path === item.path ? 'primary' : 'default'" 
        >
            {{  item.title  }}
        </el-button>
    </div>
    <router-view />

</template>
<style>
.nav{
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
</style>