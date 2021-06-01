<template>
  <component :is="layout" />
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
// import { useRoute } from 'vue-router';

import AuthLayout from './layout/AuthLayout';
import MainLayout from './layout/MainLayout';

export default {
  components: { AuthLayout, MainLayout },
  setup() {
    // const route = useRoute();
    const state = useStore();
    // console.log(route);

    return {
      layout: computed(() => (state.getters['auth/isAuthenticated'] ? 'main-layout' : 'auth-layout')),
    };
  },
};
</script>
