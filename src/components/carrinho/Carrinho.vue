<template>
  <div class="form-container">
    <form method="post">
      <h2 class="text-center">
        <strong>Carrinho</strong>
      </h2>

      <div class="carrinho">
        <div class="carrinho-box">
          <strong>Plano</strong>
          <span>Plano ouro expecial</span>
        </div>
        <div class="carrinho-box">
          <strong>Valor por pessoa</strong>
          <span>R$ 120,00</span>
        </div>
        <div class="carrinho-box">
          <strong>Qtd. Pessoa</strong>
          <input
            type="number"
            id="number"
            class="form-control quantity-input"
            value="3"
            :disabled="!this.$props.showActions"
          />
        </div>
        <div class="carrinho-box">
          <strong>Cobrança</strong>
          <select class="form-control" :disabled="!this.$props.showActions">
            <optgroup label="Mensal">
              <option value="12" selected>Mensal</option>
              <option value="13">Semetral</option>
              <option value="14">Anual</option>
            </optgroup>
          </select>
        </div>
        <div class="carrinho-box" style="margin-top: 23px">
          <b-button>X</b-button>
        </div>

        <div>
          <div class="carrinho-box">
            <h3 style="padding: 16px;margin-right: 5px;">Total</h3>
            <h4></h4>
            <h4>
              <span class="price">R$ 360,00</span>
            </h4>
          </div>

          <b-button
            class="button-planos"
            @click="finalizarCompra()"
            v-if="this.$props.showActions"
          >Finalizar Compra</b-button>
        </div>
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
.carrinho {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 60px;
}
.carrinho-box {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  align-items: center;
}
</style>