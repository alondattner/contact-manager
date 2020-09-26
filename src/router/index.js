import Vue from 'vue'
import VueRouter from 'vue-router'
import ContactList from '../views/ContactList.vue'
import ContactEdit from '../views/ContactEdit.vue'
import ContactCreate from '../views/ContactCreate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ContactList',
    component: ContactList
  },
  {
    path: '/edit/:id',
    name: 'ContactEdit',
    component: ContactEdit
  },
  {
    path: '/create',
    name: 'ContactCreate',
    component: ContactCreate
  }
]

const router = new VueRouter({
  routes
})

export default router
