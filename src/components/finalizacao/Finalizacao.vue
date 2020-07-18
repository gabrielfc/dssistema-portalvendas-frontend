<template>
  <div class="finalizacao card">
    <div class="card-body">
      <form method="post">
        <h2 class="text-center">
          <strong>Finalização</strong>
        </h2>Blá blá blá
      </form>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "Finalizacao",
  data: function() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style >
.finalizacao {
  margin-left: 20%;
  margin-top: 4%;
  margin-right: 20%;
}
</style>