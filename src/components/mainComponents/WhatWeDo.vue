<script>
import { store } from "../../data/store";
export default {
  data() {
    return {
      store,
    };
  },
  emits: ["clickCard", "clickedButton", "clickArrow"],
};
</script>

<template>
  <div>
    <div class="container text-center">
      <div class="mini-title mt-5 mb-3">Our Services</div>
      <div class="my-4">
        <h1><span>What</span> We Do</h1>
      </div>
      <div>{{ store.whatWeDo.subTitle }}</div>
      <div class="d-flex just justify-content-evenly my-5">
        <div
          v-for="card in store.whatWeDo.cards"
          class="card border-0 d-flex flex-column align-items-center my-5"
          style="width: 18rem"
          @click="$emit('clickCard')"
        >
          <div class="image mt-1">
            <img :src="card.img" alt="" class="my-4" />
          </div>
          <div class="body">
            <h3 class="my-2">{{ card.title }}</h3>
            <p class="my-2">{{ card.text }}</p>
          </div>
          <p class="icon" @click="$emit('clickArrow')">
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </p>
        </div>
      </div>
      <div>
        <button @click="$emit('clickedButton')" class="my-5 button orange-btn">
          {{ store.whatWeDo.buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mini-title {
  color: #f9636b;
}
h1 {
  span {
    font-weight: 800;
  }
}
.card {
  .icon {
    color: white;
  }
  img {
    width: 200px;
    height: 150px;
  }

  &:hover {
    background-color: rgb(10, 21, 76);
    color: whitesmoke;
    border-radius: 50px;
    .image {
      background-color: white;
      border-radius: 50px;
    }
    .icon {
      display: block;

      text-align: center;

      width: 25px;
      background-color: #f9636b;
      border-radius: 50%;
    }
  }
}
</style>
