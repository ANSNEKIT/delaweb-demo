<template>
  <div class="container with-nav card">
    <h1 class="text-center">Редактировать профиль</h1>
    <form action="">
      <div class="form-control">
        <label for="name">Имя:</label>
        <input
          id="name"
          type="text"
          v-model="user.name"
        />
      </div>
      <div class="form-control">
        <label for="last-name">Фамилия:</label>
        <input
          id="last-name"
          type="text"
          v-model="user.lastName"
        />
      </div>
      <div class="form-control">
        <label for="email">Email:</label>
        <input
          id="email"
          type="text"
          v-model="user.email"
        />
      </div>
      <div class="form-control">
        <label for="status">Статус:</label>
        <select
          name="status"
          id="status"
          v-model="user.status"
        >
          <option
            v-for="(item, index) in statusOption"
            :value="item"
            :key="index"
            :selected="item === user.status"
          >{{item}}</option>
        </select>
      </div>
      <div class="form-control">
        <label for="country">Страна:</label>
        <select
          name="country"
          id="country"
          v-model="user.country"
        >
          <option
            v-for="(item, index) in countryOption"
            :value="item"
            :key="index"
            :selected="item === user.country"
          >{{item}}</option>
        </select>
      </div>
      <div class="form-control">
        <label for="city">Город:</label>
        <select
          name="city"
          id="city"
          v-model="user.city"
        >
          <option
            v-for="(item, index) in cityOption"
            :value="item"
            :key="index"
            :selected="item === user.city"
          >{{item}}</option>
        </select>
      </div>
      <div class="buttons pt-1">
        <router-link class="btn warning" to="/profile">Назад</router-link>
        <button type="submit" class="btn primary" @click="changeUser(user)">Сохранить</button>
      </div>
    </form>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const { user } = store.getters;
    const statusOption = ['Новый', 'Активный', 'Заблокирован'];
    const countryOption = ['Россия', 'Украина', 'Беларусь'];
    const cityOption = ['Москва', 'Санкт-Петербург', 'Екатеринбург'];

    return {
      user,
      statusOption,
      countryOption,
      cityOption,
      changeUser: (changeUser) => {
        store.commit('changeUser', changeUser);
        router.push('/profile');
      },
    };
  },
};
</script>

<style>

</style>
