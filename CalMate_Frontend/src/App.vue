<template>
    <RouterView></RouterView>
</template>
  
<script setup>
    // import LoginPage from './views/LoginView.vue'
    import { RouterView } from 'vue-router';
    import { onMounted } from 'vue';
    import api from '@/lib/api'

    onMounted(async() => {
        const response = await api.get('/health');
        console.log(response);
        console.log(response.data);
    })
</script>