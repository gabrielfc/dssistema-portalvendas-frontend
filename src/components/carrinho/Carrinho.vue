<template>
  <div class="form-container">
    <form method="post">
      <h2 class="text-center">
        <strong>Carrinho</strong>
      </h2>
      <div class="col-md-12 col-lg-8">
        <div class="items">
          <div class="product">
            <div class="row justify-content-center align-items-center" style="padding: 10px;">
              <div class="col-md-2">
                <label class="d-none d-md-block">Plano</label>
                Ouro especial
              </div>
              <div class="col-md-2 price">
                <label class="d-none d-md-block">Valor por pessoa</label>
                <span>R$120,00</span>
              </div>
              <div class="col-md-2">
                <label class="d-none d-md-block">Pessoas</label>
                <input
                  type="number"
                  id="number"
                  class="form-control quantity-input"
                  value="1"
                  :disabled="!this.$props.showActions"
                />
              </div>
              <div class="col-md-2">
                <label class="d-none d-md-block">Cobrança</label>
                <select class="form-control" :disabled="!this.$props.showActions">
                  <optgroup label="Mensal">
                    <option value="12" selected>Mensal</option>
                    <option value="13">Semetral</option>
                    <option value="14">Anual</option>
                  </optgroup>
                </select>
              </div>
              <div class="col-md-2">
                <button class="btn btn-danger" type="button" v-if="this.$props.showActions">Excluir</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 col-lg-4">
        <div class="summary" style="margin-right: 29px;">
          <h3 style="padding: 16px;margin-right: 5px;">Resumo</h3>
          <h4></h4>
          <h4></h4>
          <h4></h4>
          <h4>
            <span class="text">Total</span>
            <span class="price">R$ 120,00</span>
          </h4>
        </div>

        <b-button
          class="button-planos"
          @click="finalizarCompra()"
          v-if="this.$props.showActions"
        >Finalizar Compra</b-button>
      </div>
    </form>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "Carrinho",
  props: { showActions: Boolean },
  data: function() {
    return {};
  },
  methods: {
    finalizarCompra() {
      this.$router.push({ path: `/checkout` });
    }
  },
  mounted() {
    this.$scrollToTop();
  }
};
</script>

<style >
</style>