<template>
    <div id='app' class='admin'>
        <h1> This is the admin page </h1>
        <ul id='nav'>
        <li> <router-link to="/admin/manage">Manage Inventory</router-link> </li>
        <li> <router-link to="admin/newproduct">Add New Product</router-link> </li>
        </ul>
        <router-view />
    </div>
</template>

<style scoped>

#nav a.router-link-exact-active {
  color: #42b983;
}

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