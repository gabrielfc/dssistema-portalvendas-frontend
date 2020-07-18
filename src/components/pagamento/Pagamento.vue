<template>
  <div class="form-container" style="margin-top:20px">
    <form method="post">
      <h2 class="text-center">
        <strong>Pagamento</strong>
      </h2>

      <img src="@/assets/cartao.png" width="90px" height="90px" />

      <img src="@/assets/boleto.png" width="90px" height="90px" />

      <b-button class="button-planos" @click="finalizarCompra()">Finalizar Compra</b-button>
    </form>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "Pagamento",
  data: function() {
    return {};
  },
  methods: {
    finalizarCompra() {}
  },
  mounted() {}
};
</script>

<style >
</style>