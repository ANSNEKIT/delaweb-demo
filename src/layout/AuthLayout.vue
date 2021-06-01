<template>
  <the-navbar>
    <li class="navbar-item">
      <a href="#" @click="popupOpen">Войти</a>
    </li>
  </the-navbar>

  <Home>
    <p class="text-center main-text">Войдите чтобы получить доступ к расширенному функционалу</p>
  </Home>

  <popup-login
    :isOpen="isPopupOpen"
    @login="popupClose"
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

    popupClose() {
      this.isPopupOpen = false;
    },
  },
};

</script>
