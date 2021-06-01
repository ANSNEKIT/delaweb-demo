export default {
  namespaced: true,
  state() {
    return {
      token: null,
    };
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('jwt-token', 'TEST TOKEN');
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem('jwt-token');
      console.log('logout');
    },
  },
  actions: {
    async login({ commit }) {
      commit('setToken', 'TEST TOKEN');
      console.log('auth/login');
      // TODO: Здесь будет реализован асинхронный запрос на сервер
    },
  },
  getters: {
    token(state) {
      return state.token;
    },
    isAuthenticated(state) {
      return !!state.token;
    },
  },
};
