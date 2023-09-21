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
    <div class="container d-flex">
      <div>
        <h1>{{ store.subscribe.title }}</h1>
        <p>{{ store.subscribe.text }}</p>
      </div>
      <div class="search-container">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">Submit</button>
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
  background-color: #f9636b;
  justify-content: space-between;
  border-radius: 25px;
  align-items: center;
  padding: 20px;
}
</style>
