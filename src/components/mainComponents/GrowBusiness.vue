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
  <div class="dad" id="Home">
    <div class="container d-flex align-items-center">
      <div class="bg-img">
        <img src="/img/main/men-data.png" alt="" />
      </div>
      <div class="text d-flex flex-column align-items-center">
        <div class="mb-3">
          <h1><span>Grow Your Business</span> With Our Stategy</h1>
        </div>
        <div class="sub-title mb-2">{{ store.buisnessGrow.subtext }}</div>
        <div class="mb-5">
          <button class="orange-btn" @click="$emit('tryNow')">
            {{ store.buisnessGrow.button1 }}
          </button>
          <button class="blue-btn" @click="$emit('exploreMore')">
            {{ store.buisnessGrow.button2 }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-img {
  background-image: url("/img/main/nemoodar.png");
  background-repeat: no-repeat;
  background-position: top;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  height: 700px;
  img {
    width: 350px;
    padding: 10px;
    padding-bottom: 100px;
  }
}
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

      .sub-title {
        color: #03a7d3e6;
      }
    }
  }
}
</style>
