<script>
import { store } from "../../data/store";
export default {
  data() {
    return {
      store,
      counter: 0,
    };
  },
  methods: {
    goNext() {
      if (this.counter < this.store.latestWork.cards.length - 1) {
        this.counter++;
      } else {
        this.counter = 0;
      }
    },
    goPrev() {
      if (this.counter > 0) {
        this.counter--;
      } else {
        this.counter = this.store.latestWork.cards.length - 1;
      }
    },
    pointer(index) {
      this.counter = index;
    },
  },
  emits: ["clickCard"],
};
</script>

<template>
  <div class="my-5">
    <div class="container d-flex justify-content-between">
      <div>
        <p class="orange">{{ store.latestWork.miniTitle }}</p>
        <h1><span>latest</span> work</h1>
      </div>
      <div class="d-flex">
        <div class="m-3" @click="goPrev()">-</div>
        <div class="m-3" @click="goNext()">-></div>
        <!-- <div><font-awesome-icon icon="fa-solid fa-arrow-left" /></div> -->
        <!-- <div><font-awesome-icon icon="fa-solid fa-arrow-right" /></div> -->
      </div>
    </div>
    <div class="d-flex">
      <div
        class="card d-flex my-5"
        @click="pointer(index), $emit('clickCard')"
        v-for="(card, index) in store.latestWork.cards"
        :class="index == counter ? 'biggerCard' : ''"
      >
        <img :src="card.img" alt="" />
        <div class="d-flex justify-content-between">
          <h5>{{ card.title }}</h5>
          <p>{{ card.subTitle }}</p>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <div
        class="dot m-2"
        v-for="(card, index) in store.latestWork.cards"
        :class="index == counter ? 'active-dot' : ''"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 35%;
  margin: 50px;
  border-radius: 25px;
  img {
    border-radius: 25px;
  }
  font-size: 0.7rem;
  h5 {
    font-size: 1rem;
  }
}

.biggerCard {
  width: 50rem;
}

.dot {
  width: 4px;
  border-radius: 50%;
  border: solid 2px #bbbbbb;
}

.active-dot {
  border: solid 2px #f9636b;
}
</style>
