<template>
  <div class="contact-list">
    <h1>Contact List</h1>
    <router-link to="/create">
      <button>Add Contact</button>
    </router-link>
    <ul>
      <router-link v-for="(contact, index) in contacts" :key="index" :to="'/edit/' + index">
      <li>
        <h2>{{contact.name}}</h2>
        <p>{{contact.mail}}</p>
        <p>{{contact.tel}}</p>
      </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContactList',
  data() {
    return {
    }
  },
  computed: {
    contacts() {
      return this.$store.state.contacts;
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  border-radius: 10px;
  padding: 0.5em;
  margin: 1.5em 0;
  box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.2);
}
a, a:hover, a:visited {
  color: inherit;
  text-decoration: none;
}
</style>
