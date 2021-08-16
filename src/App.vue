<template>
  <v-app>
    <Navigation :items="items" :color="color" :flat="flat" />
    <v-main class="pt-0">
      <Home />
      <!-- <Video /> -->
      <About />
      <Faucet />
      <!-- <Pricing /> -->
      <Create />
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <Footer />
  </v-app>
</template>

<style scoped>
.v-main {
  background-image: url("~@/assets/img/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

<script>
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/HomeSection";
import Video from "./components/VideoSection";
import About from "./components/AboutSection";
import Faucet from "./components/FaucetSection";
import Pricing from "./components/PricingSection";
import Create from "./components/CreateSection";

export default {
  name: "App",

  components: {
    Navigation,
    Footer,
    Home,
    Video,
    About,
    Faucet,
    Pricing,
    Create,
  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
    items: [
      ["mdi-home-outline", "#Начало", "#hero"],
    //   ["mdi-information-outline", "Sobre", "#features"],
      ["mdi-download-box-outline", "#Получить REEX", "#faucet"],
    //   ["mdi-currency-usd", "Preços", "#pricing"],
      ["mdi-email-outline", "#Создать кошелек", "#create"],
    ],
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
