<template>
  <div id="app" :class="controlClassApp()">
    <Header :hideUserDropdown="!user" />
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
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";
import Loading from "@/components/template/Loading";

export default {
  name: "App",
  components: { Header, Content, Footer, Loading },
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

.form-container {
  display: flex;
  justify-content: center;
  margin-top: 70px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 2%;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}

body {
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
}

a {
  text-decoration: none;
}

#app {
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f8f9fc;
  color: #858796;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 58px 1fr 0.3fr;
  grid-template-areas:
    "header"
    "content"
    "footer";
}
</style>