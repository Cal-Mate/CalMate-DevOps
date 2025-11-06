<template>

  <header>
    <headerComponent></headerComponent>
  </header>
  <!-- 본문 -->
  <main>
    <RouterView/>
  </main>

  <aside></aside>
  
</template>

<script setup>

  import {RouterLink, RouterView} from 'vue-router';
  import headerComponent from '@/components/Header.vue';
  import { onMounted } from 'vue';
  import { useUserStore } from '@/stores/user';
    const userStore = useUserStore();
    userStore.name
    userStore.userId;

</script>

<style scoped>

</style>