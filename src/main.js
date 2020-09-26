import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    contacts: [
      {
        name: 'Hans Müller',
        mail: 'hans@müller.de',
        tel: '01234 5678910'
      },
      {
        name: 'Martin Wagner',
        mail: 'martin@wagner.de',
        tel: '01234 6543210'
      },
      {
        name: 'Michael Berger',
        mail: 'michael@berger.de',
        tel: '01234 1012345'
      },
      {
        name: 'Jürgen Braun',
        mail: 'juergen@braun.de',
        tel: '01234 2365478'
      },
    ],
  },
  mutations: {
    createContact(state, contact) {
      state.contacts.push(contact);
    },
    removeContact(state, contact) {
      for(var i = 0; i<state.contacts.length; i++) {
        if(state.contacts[i] == contact) {
          state.contacts.splice(i, 1);
          break;
        }
      }
    },
    updateContact(state, id, contact) {
      state.contacts[id] = contact;
    }
  }
})

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')
