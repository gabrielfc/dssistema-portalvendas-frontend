<template>
  <header class="text-right mb-4">
    <HeaderMenu v-if="!hideUserDropdown" />
  </header>
</template>

<script>
import HeaderMenu from "./HeaderMenu";

export default {
  name: "Header",
  props: {
    hideUserDropdown: Boolean
  },
  components: { HeaderMenu },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    }
  }
};
</script>

<style >
header {
  grid-area: header;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;
  background-color: #fff !important;
}
</style>