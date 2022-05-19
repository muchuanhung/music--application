import { createStore } from 'vuex';

// 全域 global state setting
export default createStore({
  state: {
    authModalShow: false,
  },
  mutations: {
    // 將state 設定為參數
    toggleAuthModal: (state) => {
      // 將state boolen 互轉
      state.authModalShow = !state.authModalShow;
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
  },
});
