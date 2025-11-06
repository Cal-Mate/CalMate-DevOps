<template>
    <!-- 레이아웃 컴포넌트가 그려지는 공간 
        SiginLayout.vue or DefualtLayout.vue or CommunityLayout.vue
    -->
    <RouterView></RouterView>
</template>

<script setup>
    // import LoginPage from './views/LoginView.vue'
    import { RouterView } from 'vue-router';
    import { onMounted } from 'vue';
    import api from '@/lib/api'
  import { useUserStore } from '@/stores/user';
    const userStore = useUserStore();

    onMounted(async() => {
        const response = await api.get('/health');
        console.log(response);
        console.log(response.data);

        //아래와 같이 필요한 데이터가 있으면 접근해서 사용 하면 됨
        console.log('이름:',userStore.name);
        console.log('로그인상테:',userStore.isLoggedIn);
    })
</script>