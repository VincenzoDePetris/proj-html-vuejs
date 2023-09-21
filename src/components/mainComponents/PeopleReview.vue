<script>
import { store } from "../../data/store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    star(n, star) {
      return n <= star ? "fa-solid fa-star" : "fa-regular fa-star";
    },
  },
};
</script>

<template>
  <div class="container">
    <h6 class="my-5 orange">{{ store.peopleReviw.miniTitle }}</h6>
    <h1><span>Latest</span> Posts</h1>
    <p>{{ store.peopleReviw.text }}</p>
    <div class="d-flex">
      <div v-for="review in store.peopleReviw.reviews" class="mx-3 my-5 review">
        <img :src="review.img" alt="" />
        <div>
          <p class="star">
            <font-awesome-icon :icon="star(n, review.star)" v-for="n in 5" />
          </p>
        </div>
        <div class="superscripts">"</div>
        <div>
          <p>{{ review.text }}</p>
          <p>
            <b>{{ review.name }}</b>
          </p>
          <p>{{ review.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  text-align: center;
  img {
    width: 150px;
    border: solid 3px rgb(182, 37, 111);
    border-radius: 50%;
  }
  .star {
    color: rgb(182, 37, 111);
  }

  .review {
    position: relative;
    .superscripts {
      font-size: 11rem;
      top: 20%;
      left: 40%;
      color: rgba(0, 0, 0, 0.2);
      position: absolute;
    }
  }
}
</style>
