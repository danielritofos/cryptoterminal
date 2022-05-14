import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import $ from 'jquery'
import 'bootstrap'

window.$ = window.jQuery = require('jquery');

// import VueDatepickerUi from 'vue-datepicker-ui'
// import 'vue-datepicker-ui/lib/vuedatepickerui.css';

// const app = create(App).mount('#app')
// app.component('Datepicker', VueDatepickerUi)

createApp(App).use(router).mount('#app')
