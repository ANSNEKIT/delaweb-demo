import { createStore, createLogger } from 'vuex';
import auth from './modules/auth.module';

const plugins = [];

if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger);
}

export default createStore({
  plugins,
  state: {
    user: {
      name: 'Иван',
      lastName: 'Иванов',
      email: 'test@test.ru',
      status: 'Активный',
      country: 'Украина',
      city: 'Екатеринбург',
    },
  },
  mutations: {
    changeUser(state, changedUser) {
      state.user = changedUser;
    },
  },
  actions: {
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  modules: {
    auth,
  },
});
