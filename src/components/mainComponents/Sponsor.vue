<script>
import { store } from "../../data/store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container d-flex justify-content-center">
    <div v-for="image in store.sponsor.images" class="mx-5">
      <a href=""><img :src="image.img" alt="" /></a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
