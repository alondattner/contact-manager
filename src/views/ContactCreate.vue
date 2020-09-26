<template>
  <div class="contact-create">
    <h1>Create Contact</h1>
    <input type="text" v-model="contact.name" placeholder="Name">
    <input type="text" v-model="contact.mail" placeholder="Mail">
    <input type="text" v-model="contact.tel" placeholder="Tel.">
    <button @click="$router.push('/')">Cancel</button>
    <button class="green" @click="saveContact()">Save</button>
  </div>
</template>

<script>
export default {
  name: 'ContactCreate',
  data() {
    return {
        contact: {
            id: this.$store.state.contacts.length,
            name: '',
            mail: '',
            tel: '',
        }
    }
  },
  methods: {
    saveContact() {      
      this.$store.commit('createContact', this.contact);
      this.$router.push('/');
    }
  }
}
</script>
