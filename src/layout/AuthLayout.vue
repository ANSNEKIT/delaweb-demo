<template>
  <the-navbar>
    <li class="navbar-item">
      <a href="#" @click="popupOpen">Войти</a>
    </li>
  </the-navbar>

  <Home />

  <popup-login
    :isOpen="isPopupOpen"
    @login="fetchLogin"
    @close="isPopupOpen = false"
  ></popup-login>
</template>

<script>
import TheNavbar from '../components/TheNavbar';
import PopupLogin from '../components/PopupLogin';
import Home from '../views/Home';

export default {
  components: { TheNavbar, PopupLogin, Home },
  data() {
    return { isPopupOpen: false };
  },
  methods: {
    popupOpen() {
      this.isPopupOpen = true;
    },

    fetchLogin() {
      console.log('Успешно вошли');
      this.isPopupOpen = false;
    },
  },
};

</script>
