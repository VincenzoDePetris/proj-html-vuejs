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
  <div class="dad">
    <div class="container">
      <h6 class="my-5 orange">{{ store.pricing.miniTitle }}</h6>
      <h1 class="my-3"><span>Our</span> Pricing</h1>
      <p class="my-3">{{ store.pricing.text }}</p>
      <div class="d-flex justify-content-evenly my-5">
        <div v-for="card in store.pricing.cards" class="card">
          <h1>{{ card.title }}</h1>
          <p>{{ card.subTitle }}</p>
          <div class="bg-number">{{ card.price }}</div>
          <div class="price">
            <p class="dollar">$</p>
            <h1>{{ card.price }}</h1>
          </div>
          <p>Per Month</p>

          <p><b>Creative</b> Design Enabled</p>
          <p><b>Vibrant</b> Color Usage</p>
          <p><b>Eye</b> Catching Design</p>
          <p><b>Extreme</b> Typography</p>
          <p><b>Exceptional</b> Design</p>

          <button class="orange-btn">Order Now -></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dad {
  padding: 50px 0;
  color: white;
  background: linear-gradient(
    to bottom,
    rgb(10, 21, 76) 0%,
    rgb(10, 21, 76) 60%,
    white 60%,
    white 100%
  );
}
.container {
  text-align: center;
  .card {
    padding: 100px;
    border-radius: 50px;
  }

  .bg-number {
    margin: 0%;
    padding: 0;
    position: absolute;
    top: -110px;
    right: -5px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.3);
    font-size: 15rem;
  }
  .price {
    margin: 25px;
    position: relative;
    .dollar {
      position: absolute;
      left: 35%;
      top: -15px;
    }
  }
}
</style>
