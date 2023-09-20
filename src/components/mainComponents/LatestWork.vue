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
  <div>
    <div class="container d-flex justify-content-between">
      <div>
        <p class="orange">{{ store.latestWork.miniTitle }}</p>
        <h1><span>latest</span> work</h1>
      </div>
      <div>
        <div>freccia</div>
        <div>freccia</div>
      </div>
    </div>
    <div class="d-flex">
      <div
        class="card border-0 d-flex my-5"
        style="width: 18rem"
        v-for="card in store.latestWork.cards"
      >
        <img :src="card.img" alt="" />
        <div class="d-flex justify-content-between">
          <h5>{{ card.title }}</h5>
          <p>{{ card.subTitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 35%;
  margin: 50px;
}
</style>
