<template>
  <div id="app" :class="controlClassApp()">
    <Header :hideUserDropdown="!user" />
    <Menu v-if="user" />
    <Loading v-if="validatingToken" />
    <Content v-else />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, userKey } from "@/global";
import { mapState } from "vuex";
import Header from "@/components/template/Header";
import Menu from "@/components/template/Menu";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";
import Loading from "@/components/template/Loading";

export default {
  name: "App",
  components: { Header, Menu, Content, Footer, Loading },
  computed: mapState(["isMenuVisible", "user"]),
  data: function() {
    return {
      validatingToken: true
    };
  },
  methods: {
    async validateToken() {
      this.validatingToken = true;

      if (this.$route.meta.noAuth) {
        this.validatingToken = false;
        return;
      }

      const json = localStorage.getItem(userKey);
      const userData = JSON.parse(json);
      this.$store.commit("setUser", null);

      if (!userData) {
        //if user data not exists into localstore
        this.validatingToken = false;
        this.$router.push({ name: "auth" }); //Redirect to auth
        return;
      }

      const res = await axios.post(
        `${baseApiUrl}/users/validateToken`,
        userData
      );

      if (res.data) {
        //If exists a valid token
        this.$store.commit("setUser", userData);

        if (this.$mq === "xs" || this.$mq === "sm") {
          this.$store.commit("toggleMenu", false);
        }
      } else {
        localStorage.removeItem(userKey);
        this.$router.push({ name: "auth" });
      }

      this.validatingToken = false;
    },
    controlClassApp: function() {
      if (!this.$store.state.user) {
        return "hide-all";
      }
      if (!this.$store.state.isMenuVisible) {
        return "hide-menu";
      }
      return "";
    }
  },
  created() {
    this.validateToken();
  }
};
</script>

<style>
* {
  font-family: Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji;
}

body {
  margin: 0;
}

#app {
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f8f9fc;
  color: #858796;

  display: grid;
  grid-template-columns: 224px 1fr;
  grid-template-rows: 70px 1fr 70px;
  grid-template-areas:
    "menu header"
    "menu content"
    "menu footer";
}

#app.hide-menu {
  min-height: 100vh;
  display: grid;
  background-color: #f8f9fc;
  font-size: 10px;
  grid-template-columns: 104px 1fr;
  grid-template-rows: 70px 1fr 70px;
  grid-template-areas:
    "menu header"
    "menu content"
    "menu footer";
}

#app.hide-all {
  min-height: 100vh;
  display: grid;
  background-color: #f8f9fc;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 70px 1fr;
  grid-template-areas:
    "content content"
    "content content";
}
</style>