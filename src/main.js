import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Homepage from './components/Homepage.vue'
import Priska from './components/Priska.vue'
import Propos from './components/Propos.vue'
import Projet from './components/Projet.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes: [
      {
        path:'/',
        name: 'homepage',
        component: Homepage
      },{
        path:'/priska',
        name: 'priska',
        component: Priska
      },{
        path:'/propos',
        name: 'propos',
        component: Propos
      },{
        path:'/projet',
        name: 'projet',
        component: Projet
      }
    ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
