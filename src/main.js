import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax-alpha';
import 'vuesax-alpha/theme-chalk/index.css'
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'
import 'boxicons/css/boxicons.min.css';

const app = createApp(App);
app.use(router);

app.use(Vuesax, {
    colors: {
      primary: '#5b3cc4',
      success: 'rgb(23, 201, 100)',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: 'rgb(36, 33, 69)',
      white: '#ffffff'
    },
  })

app.mount('#app');