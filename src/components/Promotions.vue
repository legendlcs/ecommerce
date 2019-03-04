<template>
  <div>
    <h1> Current updates</h1>
    <h3> New Products: </h3>
      <ul>
        <li> Item 1 </li>
        <li> Item 2 </li>
        <li> Item 3 </li>
      </ul>
      <h3> Create your promo: </h3>
      <ul>
        <li> {{promo}} </li>
        <li> Promo 2 </li>
        <li> Promo 3 </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "Promotions",
  props: {
    msg: String,
    product: Number
  },
  data: {
    promo: 'bogo'
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
