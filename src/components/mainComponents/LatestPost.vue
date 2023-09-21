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
    pointer(index) {
      this.counter = index;
    },
  },
  emits: ["ReadMore"],
};
</script>

<template>
  <div class="dad">
    <h6 class="my-5 orange">{{ store.LatestPosts.miniTitle }}</h6>
    <h1><span>Latest</span> Posts</h1>
    <p>{{ store.LatestPosts.text }}</p>
    <div class="d-flex justify-content-center">
      <div
        v-for="(card, index) in store.LatestPosts.cards"
        class="card bg-blue"
        @click="pointer(index)"
        :class="index == counter ? 'card-selected' : ''"
      >
        <div>
          <p class="my-3 p-1">
            {{ card.date }} - <span>{{ card.author }}</span>
          </p>
          <h3 class="my-3 p-1">{{ card.title }}</h3>
          <p class="my-3 p-1">{{ card.text }}</p>
        </div>
        <div class="">
          <button @click="$emit('ReadMore')" class="my-3 mx-2">
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dad {
  text-align: center;
  border: 100px 0;
}
.card {
  border-radius: 30px;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  margin: 25px;
}

.card-selected {
  &.card:nth-of-type(1) {
    background-image: url("/img/main/headway-537308-unsplash-1380x703.jpg");
  }
  &.card:nth-of-type(2) {
    background-image: url("img/main/studio-republic-644339-unsplash-1380x703.jpg");
  }
  &.card:nth-of-type(3) {
    background-image: url("img/main/timon-studler-63413-unsplash-1380x703.jpg");
    color: black;
  }
  background-size: cover;
  width: 35%;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  div {
    button {
      min-width: 100px;
    }
  }
}
</style>
