<template>
  <template v-if="isOpen">
    <div class="popup backdrop" @click="close">
      <div class="popup-body">
        <form
          class="popup-content"
          @submit.prevent="submitLogin"
          @click.stop
        >
          <h1>Войти</h1>
          <hr />
          <div class="pb-1">
            <div
              class="form-control"
              :class="{invalid: errors.email}"
            >
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="test@test.ru"
                required
                v-model="email"
              />
              <small v-if="errors.email">{{ errors.email }}</small>
            </div>
            <div
              class="form-control"
              :class="{invalid: errors.password}"
            >
              <label for="password">Пароль</label>
              <input
                type="password"
                id="password"
                v-model="password"
                required
              />
              <small v-if="errors.password">{{ errors.password }}</small>
            </div>
          </div>
          <hr />
          <div class="footer">
            <button type="button" class="btn" @click="close">Отмена</button>
            &nbsp;
            <button
              type="submit"
              class="btn primary"
              @click="login"
              :disabled="isLoading"
            >Войти</button>
          </div>
        </form>
      </div>
    </div>

    <Loading
      v-model:active="isLoading"
      :is-full-page="true"
      color="rgb(0,123,255)"
    />

  </template>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  components: { Loading },
  props: {
    isOpen: Boolean,
  },
  emits: {
    login: null,
    close: null,
  },

  data() {
    return {
      email: '',
      password: '',
      errors: {
        email: null,
        password: null,
      },
      isLoading: false,
    };
  },

  mounted() {
    document.addEventListener('keydown', this.handleKeydown);
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  },

  methods: {
    handleKeydown(e) {
      if (this.isOpen && e.key === 'Escape') {
        this.close();
      }
    },
    close() {
      this.$emit('close');
    },
    isFormValid() {
      let isValid = true;
      if (this.email.trim().length === 0) {
        isValid = false;
        this.errors.email = 'Email не должен быть пустым';
      }
      if (this.email.trim().length > 0) {
        const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!regexp.test(this.email)) {
          isValid = false;
          this.errors.email = 'Email некорректный';
        }
      }

      if (this.password.trim().length === 0 || this.password.trim().length < 8) {
        isValid = false;
        this.errors.password = 'Пароль должен более 8 символов!';
      }

      return isValid;
    },
    submitLogin() {
      if (this.isFormValid()) {
        this.isLoading = true;
        setTimeout(() => {
          this.$emit('login');
          this.isLoading = false;
        }, 3000);

        this.email = '';
        this.password = '';
        this.errors = {
          email: null,
          password: null,
        };
      }
    },
  },
};
</script>

<style>
  .popup-body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    padding: 20px;
  }

  .popup-content {
    width: 500px;
    min-width: 300px;
    padding: 25px;
    background-color: white;
    border-radius: 10px;
    z-index: 11;
  }

  .popup-content h1 {
    text-align: center;
    margin: 0;
  }

  .backdrop {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 10;
  }

  .footer {
    margin-top: 20px;
    text-align: right;
  }
</style>
