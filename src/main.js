import { createApp } from "vue";
import App from "./App.vue";

/* import fontawesome */
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faStar as faStarFilled } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(
  faStarEmpty,
  faStarFilled,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faArrowRight,
  faArrowLeft
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
