import { createRouter, createWebHashHistory } from 'vue-router';
import HomeViewer from './views/HomeViewer.vue';
import ContactsViewer from './views/ContactsViewer.vue';
import ProductsViewer from './views/ProductsViewer.vue';
import CartViewer from './views/CartViewer.vue';
import CheckoutViewer from './views/CheckoutViewer.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
      { path: '/:index?', component: HomeViewer, props: true },
      { path: '/products', component: ProductsViewer, props: true },
      { path: '/contacts', component: ContactsViewer, props: true },
      { path: '/checkout', component: CheckoutViewer, props: true }
  ]
})

export default router;