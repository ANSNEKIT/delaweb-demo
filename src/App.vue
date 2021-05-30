<template>
  <component :is="layout" />
</template>

<script>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import AuthLayout from './layout/AuthLayout';
import MainLayout from './layout/MainLayout';

export default {
  components: { AuthLayout, MainLayout },
  setup() {
    const route = useRoute();
    const isAuth = ref(true);
    console.log(route);

    return {
      layout: computed(() => (isAuth.value ? 'main-layout' : 'auth-layout')),
    };
  },
};
</script>
