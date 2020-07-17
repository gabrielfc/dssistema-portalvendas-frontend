<template>
  <nav class="menu">
    <div class="menuBase">
      <span>E-Commerce - Portal Administrativo</span>
    </div>
    <ul class="menuList">
      <li>
        <router-link to="/" class="router-link" style="color: #fff;">
          <i class="fa fa-tachometer iconMenu" style="font-size: 27px;"></i>
          <span>Dashboard</span>
        </router-link>
      </li>

      <li>
        <router-link to="/setup" class="router-link">
          <i class="fa fa-cog iconMenu" style="font-size: 27px;"></i>
          <span>Configurações</span>
        </router-link>
      </li>
    </ul>
    <div class="menuBase">
      <a class="toggle" @click="toggleMenu">
        <i
          class="fa fa-chevron-circle-left"
          :class="icon"
          style="color:hsla(0, 0%, 100%, 0.3);font-size: 27px;"
        ></i>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  computed: {
    icon() {
      return this.$store.state.isMenuVisible
        ? "fa-chevron-circle-left"
        : "fa-chevron-circle-right";
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    }
  }
};
</script>

<style >
.menu {
  grid-area: menu;
  min-height: 100vh;
  background-color: #4e73df;
  background-image: linear-gradient(180deg, #4e73df 10%, #224abe);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.menuBase {
  min-height: 100px;
  color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menuList {
  list-style-type: none;
  min-height: 50vh;
  padding: 0px;
  color: #ffffff;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.router-link {
  color: hsla(0, 0%, 100%, 0.3);
}
.router-link:hover {
  color: #ffffff;
  text-decoration: none;
}
.iconMenu {
  margin-right: 10px;
}
</style>