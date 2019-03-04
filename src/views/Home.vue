<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Promotions />
  </div>
</template>

<script>
// @ is an alias to /src
import Promotions from "@/components/Promotions.vue";

export default {
  name: "home",
  components: {
    Promotions
  }
};
</script>
