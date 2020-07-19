<template>
  <div class="form-container" style="width: 60%">
    <form method="post">
      <h2 class="text-center">
        <strong>Fale conosco</strong>
      </h2>Blá blá blá
    </form>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "FaleConosco",
  data: function() {
    return {};
  },
  methods: {},
  mounted() {
    this.$scrollToTop();
  }
};
</script>

<style >
</style>