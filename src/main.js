import 'babel-polyfill';
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes'
import VuexSaga from 'vuex-saga'

Vue.config.productionTip = false
Vue.use(VuexSaga, { store: store })

new Vue(Vue.util.extend(
  {
    render: h => h(App),
    store,
    router
  }
)).$mount('#app')