<template>
  <div class="contact-edit">
    <h1>Edit Contact</h1>
    <input type="text" v-model="contact.name" placeholder="Name">
    <input type="text" v-model="contact.mail" placeholder="Mail">
    <input type="text" v-model="contact.tel" placeholder="Tel">  
    <button @click="$router.push('/')">Cancel</button>
    <button class="red" @click="deleteContact()">Delete</button>
    <button class="green" @click="saveContact()">Save</button>
  </div>
</template>

<script>
export default {
  name: 'ContactEdit',
  data() {
    return {
      contact: this.$store.state.contacts[this.$route.params.id],
    }
  },
  methods: {
    saveContact() {
      this.$store.commit('updateContact', this.contact);
      this.$router.push('/');
    },
    deleteContact() {
      this.$store.commit('removeContact', this.contact);
      this.$router.push('/');
    }
  }
}
</script>
