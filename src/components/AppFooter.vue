<script>
import subscribe from "./footerComponents/subscribe.vue";
import links from "./footerComponents/links.vue";

export default {
  components: {
    subscribe,
    links,
  },
  methods: {
    subscribe(mail) {
      console.log("la tua mail è " + mail);
    },
  },
};
</script>
<template>
  <subscribe @eMail="subscribe" />
  <links />
</template>

<style lang="scss" scoped></style>
