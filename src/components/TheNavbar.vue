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
          <a href="#">Выйти</a>
        </li>
      </slot>
    </ul>
  </nav>
</template>

<script>
export default {

};
</script>

<style>

</style>
