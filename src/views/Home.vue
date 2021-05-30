<template>
  <div class="container with-nav card">
    <h1 class="text-center">Добро пожаловать в демо личный кабинет <br>
    <span>{{ APP_NAME }}!</span></h1>
    <p class="text-center main-text">Войдите чтобы получить доступ к расширенному функционалу</p>
    <Slider />
  </div>
</template>

<script>
import Slider from '../components/Slider';

export default {
  name: 'Home',
  components: {
    Slider,
  },
  data() {
    return {
      APP_NAME: 'Delaweb-demo-app',
    };
  },
};
</script>

<style scoped>
  .main-text {
    font-size: 1.5rem;
    margin-top: 80px;
    margin-bottom: 50px;
  }
</style>
