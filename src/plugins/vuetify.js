import Vue from 'vue'
import Vuetify from 'vuetify'
/* import 'vuetify/src/stylus/app.styl'
import 'vuetify/src/stylus/components/' */
// index.js or main.js
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
// import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify, {
  iconfont: `"md"`,
})
