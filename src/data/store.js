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

  LatestPosts: {
    miniTitle: "Blog",
    text: "When, while the lovely valley with vapour around meand the merifian sun strikes the upper surface.",
    cards: [
      {
        date: "April 21, 2019",
        author: "by Paul",
        title: "Amazon gets CCI nod to acquire 49% stake in",
        text: "When, while the lovely valley teems with vapor around me, and the meridian sun s...",
        img: "/img/main/headway-537308-unsplash-1380x703.jpg",
      },
      {
        date: "April 21, 2019",
        author: "by Paul",
        title:
          "Clearing Corporations get SEBI nod to invest in overnight founds",
        text: "When, while the lovely valley teems with vapor around me, and the meridian sun s...",
        img: "img/main/studio-republic-644339-unsplash-1380x703.jpg",
      },
      {
        date: "April 21, 2019",
        author: "by Paul",
        title:
          "Shabnam Dhillion, wife of RSSB chief Gurinder Dhillion, passes away in London...",
        text: "When, while the lovely valley teems with vapor around me, and the meridian sun s...",
        img: "img/main/timon-studler-63413-unsplash-1380x703.jpg",
      },
    ],
  },

  peopleReviw: {
    miniTitle: "Testimonial",
    text: "When, while the lovely valley with vapour around meand the merifian sun strikes the upper surface.",
    reviews: [
      {
        img: "img/review/fabio-spinelli-695744-unsplash-1024x1024.png",
        star: "5",
        text: "When, while lovely valley teems whit vapour around meand meridian sun strikes the upper impenetrable follage of my trees, and but a thousand.",
        name: "Michkel Anegl",
        role: "Marketing Management",
      },
      {
        img: "img/review/philipe-cavalcante-539505-unsplash-1024x1024.png",
        star: "3",
        text: "When, while lovely valley teems whit vapour around meand meridian sun strikes the upper impenetrable follage of my trees, and but a thousand.",
        name: "Michkel Anegl",
        role: "Marketing Management",
      },
      {
        img: "img/review/szabo-viktor-1266895-unsplash-1024x1024.png",
        star: "4",
        text: "When, while lovely valley teems whit vapour around meand meridian sun strikes the upper impenetrable follage of my trees, and but a thousand.",
        name: "Michkel Anegl",
        role: "Marketing Management",
      },
    ],
  },

  sponsor: {
    images: [
      {
        img: "/img/sponsor/client-1-1.png",
        name: "",
      },
      {
        img: "/img/sponsor/clienty-2.png",
        name: "",
      },
      {
        img: "/img/sponsor/clienty-3.png",
        name: "",
      },
      {
        img: "/img/sponsor/clienty-4.png",
        name: "",
      },
      {
        img: "/img/sponsor/client-5.png",
        name: "",
      },
    ],
  },

  // footer data

  subscribe: {
    title: "We Offer Awesome Services",
    text: "When, while lovely valley with vapour around meand meridian sun strikes the upper surface.",
  },

  footer: {
    logoImg: "/img/logos/white-logo-2.png",
    text: "When, while lovely valley teems vapour aroundmeand meridian sun strikes the upper impenetrable",
    contact: {
      address:
        "Patricia C. A,edee 4401 Waldeck Street Grapevine Nashville, Tx 76051",
      phone: "+99(0) 101 0000 888",
      mail: "Info@yourdomain.com",
    },
  },
  links: [
    {
      title: "Quick Links",
      link: ["services", "Contact", "Blog"],
    },
    {
      title: "Resources",
      link: ["Art Design", "Computer", "IT News", "Networking", "Web Security"],
    },
  ],
});
