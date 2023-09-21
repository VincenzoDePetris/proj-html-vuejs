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
  <div class="dad bg-blue">
    <div class="container">
      <div class="son">
        <div class="mx-2">
          <div><img :src="store.footer.logoImg" alt="" /></div>
          <p class="my-5">
            {{ store.footer.text }}
          </p>
        </div>
        <div v-for="links in store.links" class="mx-2">
          <h5>{{ links.title }}</h5>
          <ul>
            <li v-for="link in links.link">
              <a href="#">{{ link }}</a>
            </li>
          </ul>
        </div>
        <div class="mx-2">
          <h5>Contact Us</h5>
          <p><b>Address: </b>{{ store.footer.contact.address }}</p>
          <p><b>Phone: </b>{{ store.footer.contact.phone }}</p>
          <p><b>Email: </b>{{ store.footer.contact.mail }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dad {
  margin-bottom: 0;
  padding-bottom: 20px;
  p {
    color: rgb(129, 118, 124);
  }
  b {
    color: whitesmoke;
  }
  ul {
    list-style: none;
    padding: 0;
    a {
      text-decoration: none;
      color: rgb(129, 118, 124);
    }
  }
  .son {
    display: flex;
    justify-content: space-between;
    div {
      width: 25%;
    }
  }
}
</style>
