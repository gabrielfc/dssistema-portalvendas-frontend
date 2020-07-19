<template>
  <div class="form-container" style="margin-top:20px;">
    <form method="post">
      <h2 class="text-center">
        <strong>Pagamento</strong>
      </h2>

      <b-form-radio-group v-model="formaPagamento">
        <b-form-radio value="1">
          <img src="@/assets/cartao.png" width="120px" height="90px" />
        </b-form-radio>

        <b-form-radio value="2">
          <img src="@/assets/boleto.png" width="120px" height="90px" />
        </b-form-radio>
      </b-form-radio-group>

      <div v-if="formaPagamento == '1'">
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            placeholder="Cartão"
            style="margin-top: 25px;"
            required
          />
        </div>
        <div class="form-group">
          <input class="form-control" type="text" placeholder="Nome do titular" required />
        </div>
        <div class="form-group form-inline">
          <input class="form-control" type="text" placeholder="Vencimento" required />
          <input
            class="form-control"
            type="text"
            placeholder="Código de segurança"
            required
            style="margin-left: 15px;"
          />
        </div>
      </div>

      <b-button
        class="button-planos"
        type="submit"
        :disabled="formaPagamento == null"
        style="margin-top: 25px;"
      >Finalizar Compra</b-button>
    </form>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "Pagamento",
  data: function() {
    return {
      formaPagamento: null
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style >
</style>