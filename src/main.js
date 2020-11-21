import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCo3mYFRB8-QjQTRfsf4ZAi6Ag8_PnA1Ko',
    libraries: 'places'
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
