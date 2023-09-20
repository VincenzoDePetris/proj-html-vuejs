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

  buisnessGrow: {
    title: "start your project",
    subtext:
      "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper surface. of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary",
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

  latestWork: {
    miniTitle: "Portfolio",
    cards: [
      {
        img: "img/slider/DRY-1-790x576.jpg",
        title: "Mock-up T",
        subTitle: "Experience",
      },
      {
        img: "img/slider/8wa60okr-1-790x576.jpg",
        title: "Bascket of Flower on Table",
        subTitle: "Branding Strategy",
      },
      {
        img: "img/slider/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg",
        title: "Purinjy Products",
        subTitle: "Digital Experience",
      },
      {
        img: "img/slider/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg",
        title: "Satisfy Poster",
        subTitle: "Branding Strategy",
      },
    ],
  },

  pricing: {
    miniTitle: "Price List",
    text: "When, while the lovely valley with vapour around meand the merifian sun strikes the upper surface.",
    cards: [
      {
        title: "Designing",
        subTitle: "PROCESS",
        price: "40",
      },
      {
        title: "Developing",
        subTitle: "PRODUCT",
        price: "60",
      },
      {
        title: "Supporting",
        subTitle: "CLIENTS",
        price: "80",
      },
    ],
  },
});
