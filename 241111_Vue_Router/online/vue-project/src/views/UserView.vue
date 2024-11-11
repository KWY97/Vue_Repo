<template>
  <div>
    <h1>UserView</h1>
    <RouterLink :to="{ name: 'user-profile' }">Profile</RouterLink>
    <RouterLink :to="{ name: 'user-posts' }">Posts</RouterLink>
    <h2>{{ $route.params.id }}번 유저 프로필 페이지</h2>
    <h2>{{ userId }}번 유저 프로필 페이지</h2>
    <button @click="goHome">홈으로!</button>
    <hr>
    <RouterView />
  </div>
</template>

<script setup>
import { useRoute, RouterLink, RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const userId = ref(route.params.id)

const router = useRouter()
const goHome = function () {
  // router.push({ name: 'home' })
  router.replace({ name: 'home' })
  // router.push({ name: 'user', params: { username: 'alice' } }) -> 파라미터 보내는 법 (그냥 예시로 쓴 것)
}

</script>

<style scoped>

</style>