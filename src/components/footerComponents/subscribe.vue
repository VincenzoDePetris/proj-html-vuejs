<script>
import { store } from "../../data/store";
export default {
  data() {
    return {
      store,
      mail: "",
    };
  },
  emits: ["eMail"],
};
</script>

<template>
  <div class="dad">
    <div class="container d-flex">
      <div>
        <h1>{{ store.subscribe.title }}</h1>
        <p>{{ store.subscribe.text }}</p>
      </div>
      <div class="search-container">
        <form role="search" @submit.prevent="$emit('eMail', mail)">
          <input
            v-model="mail"
            type="search"
            placeholder="Enter Your Email Address"
          />
          <button class="blue-btn" type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dad {
  padding: 50px 0;
  color: whitesmoke;
  background: linear-gradient(
    to bottom,
    white 0%,
    white 60%,
    rgb(10, 21, 76) 60%,
    rgb(10, 21, 76) 100%
  );
}

.container {
  background: linear-gradient(
    to left,

    #f9636b 0%,

    #b6246e 100%
  );
  justify-content: space-between;
  border-radius: 25px;
  align-items: center;
  padding: 20px;
}

.search-container {
  background-color: white;
  padding: 4px 7px;
  border-radius: 25px;
  input {
    border: none;
    outline: none;
  }
}
</style>
