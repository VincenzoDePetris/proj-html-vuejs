<script>
import BusinessPlanning from "./mainComponents/BusinessPlanning.vue";
import GrowBusiness from "./mainComponents/GrowBusiness.vue";
import LatestPost from "./mainComponents/LatestPost.vue";
import LatestWork from "./mainComponents/LatestWork.vue";
import PeopleReview from "./mainComponents/PeopleReview.vue";
import Pricing from "./mainComponents/Pricing.vue";
import Sponsor from "./mainComponents/Sponsor.vue";
import WhatWeDo from "./mainComponents/WhatWeDo.vue";

export default {
  components: {
    BusinessPlanning,
    GrowBusiness,
    LatestPost,
    LatestWork,
    PeopleReview,
    Pricing,
    Sponsor,
    WhatWeDo,
  },
  methods: {
    clickedButton() {
      console.log("hai cliccato questo bottone");
    },
    clickedCard() {
      console.log("Hai cliccato una card");
    },
    clickedOrder() {
      console.log('Hai cliccato "order now"');
    },
    readMore() {
      console.log("read more");
    },
  },
};
</script>

<template>
  <BusinessPlanning @exploreMore="clickedButton" @tryNow="clickedButton" />
  <WhatWeDo
    @clickCard="clickedCard"
    @clickedButton="clickedButton"
    @clickArrow="clickedButton"
  />
  <GrowBusiness @exploreMore="clickedButton" @tryNow="clickedButton" />
  <LatestWork @clickCard="clickedCard" />
  <Pricing @orderNow="clickedOrder" />
  <LatestPost @ReadMore="readMore" />
  <PeopleReview />
  <Sponsor />
</template>

<style lang="scss" scoped></style>
