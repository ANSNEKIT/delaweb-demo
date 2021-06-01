<template>
  <div class="container with-nav card">
    <h1 class="text-center">Страница профиля</h1>
    <div class="d-flex">
      <div class="profile-image"><img width="300" height="350" src="http://placehold.it/300x350/9f9/000?text=Photo+profile" /></div>
      <div class="profile-user">
        <p><strong>Имя:</strong>&nbsp; {{user.name}}</p>
        <p><strong>Фамилия:</strong>&nbsp; {{user.lastName}}</p>
        <p><strong>Email:</strong>&nbsp; {{user.email}}</p>
        <p><strong>Статус:</strong>&nbsp; {{user.status}}</p>
        <p><strong>Страна:</strong>&nbsp; {{user.country}}</p>
        <p><strong>Город:</strong>&nbsp; {{user.city}}</p>
        <div class="pt-1">
          <router-link class="btn warning" to="/edit">Редактировать</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
  name: 'Profile',
  setup() {
    const store = useStore();
    const { user } = store.getters;
    return {
      user,
    };
  },

};
</script>

<style scoped>
  .d-flex {
    display: flex;
  }
  .profile-image {
    margin-right: 50px;
  }
  .profile-user {
    font-size: 1.1rem;
  }
</style>
