<script>
export default {
  data() {
    return {
      counter: 0,
      headerLinks: [
        "Home",
        "About",
        "Services",
        "Blog",
        "Contact",
        "Portfolio",
      ],
    };
  },
  methods: {
    activeClass(index) {
      this.counter = index;
    },
  },
};
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div>
        <a class="navbar-brand"
          ><img src="/img/logos/white-logo-2.png" alt=""
        /></a>
      </div>
      <div class="d-flex align-items-center">
        <div
          v-for="(link, index) in headerLinks"
          class="px-2"
          @click="activeClass(index)"
          :class="index == counter ? 'active' : ''"
        >
          <a href="#">
            {{ link }}
          </a>
        </div>
        <div>
          <button class="" type="submit">Sign In</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: rgb(10, 21, 76);
  height: 80px;
  .active {
    a {
      color: #f9636b;
    }
  }
  a {
    color: whitesmoke;
  }
  button {
    background-color: #527ceb;
    color: whitesmoke;
  }
}
</style>
