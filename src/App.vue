<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useAuthStore } from './stores/auth'

const authStore = useAuthStore()

onMounted(async () => {
  try {
    await authStore.getIsAuth()
  } catch (e) {
    console.log(e)
  }
})
</script>

<template>
  <RouterView />
</template>
