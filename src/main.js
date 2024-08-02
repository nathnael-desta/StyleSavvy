import { createApp } from 'vue';
import App from './App.vue';
import "./style.css";
import router from './routes';
import $data from './data';

const app = createApp(App);

app.use(router);
app.provide("$data", $data);

app.mount('#app');