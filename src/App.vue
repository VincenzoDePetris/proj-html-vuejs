<script>
import axios from "axios";
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { AppHeader, AppMain, AppFooter },
  methods: {
    clickedButton() {
      console.log("hai clickato un bottone");
    },
  },
};
</script>

<template>
  <AppHeader @signIn="clickedButton" />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use "./assets/general.scss" as *;
</style>
