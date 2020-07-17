<template>
  <div class="user-dropdown">
    <div class="user-button">
      <span class="d-none d-sm-block" style>Administrador</span>
      <div class="user-dropdown-img">
        <img src="../../assets/admin.jpg" alt="User" />
      </div>
      <i class="fa fa-angle-down"></i>
    </div>
    <div class="user-dropdown-content">
      <router-link to="/changePassword">
        <i class="fa fa-user user-dropdown-icon"></i> Alterar senha
      </router-link>
      <router-link to="/setup">
        <i class="fa fa-cogs user-dropdown-icon"></i> Configurações
      </router-link>
      <a href @click.prevent="logout">
        <i class="fa fa-sign-out user-dropdown-icon"></i> Sair
      </a>
    </div>
  </div>
</template>

<script>
import { userKey } from "@/global";
import { mapState } from "vuex";

export default {
  name: "HeaderMenu",
  computed: mapState(["user"]),
  methods: {
    logout() {
      localStorage.removeItem(userKey);
      this.$store.commit("setUser", null);
      this.$router.push({ name: "auth" });
    }
  }
};
</script>

<style>
.user-dropdown {
  position: relative;
  height: 100%;
}

.user-button {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 200;
  height: 100%;
  padding: 0px 20px;
  font-size: 14px;
  color: #858796;
}

.user-dropdown-img {
  margin: 0px 10px;
}

.user-dropdown-icon {
  margin: 0px 10px 0px 0px;
}

.user-dropdown-img > img {
  max-height: 37px;
  border-radius: 5px;
}

.user-dropdown-content {
  border-radius: 5px;
  position: absolute;
  right: 5px;
  background-color: #fff;
  min-width: 170px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 1;
  color: #858796;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  font-size: 14px;
  text-align: left;

  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}

.user-dropdown:hover .user-dropdown-content {
  visibility: visible;
  opacity: 1;
}

.user-dropdown-content a {
  text-decoration: none;
  color: #858796;
  padding: 10px;
}

.user-dropdown-content a:hover {
  text-decoration: none;
  color: #858796;
  background-color: #ededed;
}
</style>