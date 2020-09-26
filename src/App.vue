<template>
  <div id="app">
    <div class="row center-xs">
      <div class="col-xs-12 col-sm-8 col-md-6 col-lg-4">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: 'Roboto';
  src: url('assets/fonts/Roboto-Regular.ttf');
}
@font-face {
  font-family: 'Montserrat';
  src: url('assets/fonts/Montserrat-Medium.ttf');
}
#app {
  font-family: 'Roboto', Arial, sans-serif;
  text-align: center;
  color: #272727;
  padding: 1em;
}
h1, h2, h3 {
  font-family: 'Montserrat', Arial, sans-serif;
  margin: 0.2em 0 0.3em 0;
}
p {
  margin: 0 0 0.2em 0;
}
button {
  background-color: #0e6fc9;
  color: #fff;
  font-family: 'Montserrat', Arial, sans-serif;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 10px;
  font-size: 0.9em;
  border: none;
  box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.2);
  margin: 10px;
}
button:hover {
  background-color: #0b62b3;
  box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.3);
}
button.red {  
  background-color: #c72431;
}
button.red:hover {  
  background-color: #ab1520;
}
button.green {  
  background-color: #18ad40;
}
button.green:hover {  
  background-color: #0e8f31;
}
input {
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 5px 30px 0px rgba(0,0,0,0.2);
  width: 90%;
  margin: 10px 0px;
}
input:focus {
  outline: none;
  border: 1px solid #0e6fc9;
}
</style>
