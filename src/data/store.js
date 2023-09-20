import { Button } from "bootstrap";
import { reactive } from "vue";

export const store = reactive({
  // main data
  businessPlanning: {
    text: "Business Planning Digital Technology Modern Solution!",
    subtext:
      "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface.",
    button1: "Try It Now",
    button2: "Explore More",
  },

  whatWeDo: {
    subTitle:
      "When, While the lovely valley teems with vapour around meand the",
    cards: [
      {
        img: "/img/main/Group-247.png",
        title: "Data Analysis",
        text: "When, while the lovely valley teems whith vapour around meand the meridian sun strikes the upper",
      },
      {
        img: "/img/main/Group-567.png",
        title: "SEO Optimization",
        text: "When, while the lovely valley teems whith vapour around meand the meridian sun strikes the upper",
      },
      {
        img: "/img/main/Group-538.png",
        title: "Security Data",
        text: "When, while the lovely valley teems whith vapour around meand the meridian sun strikes the upper",
      },
      {
        img: "/img/main/Group-566.png",
        title: "Branding Strategy",
        text: "When, while the lovely valley teems whith vapour around meand the meridian sun strikes the upper",
      },
    ],
    buttonText: "View All Services",
  },
});
