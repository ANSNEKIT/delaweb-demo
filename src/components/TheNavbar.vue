<template>
  <nav class="navbar">
    <h3>Delaweb-demo-app</h3>
    <ul class="navbar-menu">
      <slot>
        <li class="navbar-item">
          <router-link to="/">Главная</router-link>
        </li>
        <li class="navbar-item">
          <router-link to="/profile">Профиль</router-link>
        </li>
        <li class="navbar-item">
          <a href="#" @click.prevent="logout">Выйти</a>
        </li>
      </slot>
    </ul>
  </nav>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    return {
      logout: () => {
        store.commit('auth/logout');
        router.push('/');
      },
    };
  },
};
</script>

<style>

</style>
