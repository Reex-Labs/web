import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueClipboard from 'vue-clipboard2'

Vue.use(VueYouTubeEmbed)
Vue.use(VueClipboard)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
