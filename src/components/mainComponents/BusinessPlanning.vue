<script>
import { store } from "../../data/store";

export default {
  data() {
    return {
      store,
    };
  },
  emits: ["tryNow", "exploreMore"],
};
</script>

<template>
  <div class="dad" id="Home">
    <div class="container d-flex align-items-center">
      <div class="text d-flex flex-column align-items-center">
        <div class="mb-3">
          <h1>{{ store.businessPlanning.text }}</h1>
        </div>
        <div class="sub-title mb-2">{{ store.businessPlanning.subtext }}</div>
        <div class="mb-5">
          <button class="orange-btn" @click="$emit('tryNow')">
            {{ store.businessPlanning.button1 }}
          </button>
          <button class="blue-btn" @click="$emit('exploreMore')">
            {{ store.businessPlanning.button2 }}
          </button>
        </div>
      </div>
      <div>
        <img src="/img/main/header.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dad {
  background-color: rgb(10, 21, 76);
  color: whitesmoke;
  .container {
    .text {
      div {
        margin: 5px;
        button {
          margin: 5px;
        }
      }
    }
    div {
      width: 50%;
      h1 {
        font-size: 2.5rem;
      }
      img {
        width: 700px;
        padding: 10px;
        padding-bottom: 100px;
      }
      .sub-title {
        color: #03a7d3e6;
      }
    }
  }
}
</style>
