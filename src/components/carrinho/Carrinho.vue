<template>
  <div class="form-container">
    <form method="post">
      <h2 class="text-center">
        <strong>Carrinho</strong>
      </h2>

      <div class="carrinho">
        <div class="carrinho-box">
          <strong>Plano</strong>
          <span>{{plano.nomePlano}}</span>
        </div>
        <div class="carrinho-box">
          <strong>Valor por pessoa</strong>
          <span>R$ {{formatPrice(plano.valorTitular)}}</span>
        </div>
        <div class="carrinho-box">
          <strong>Qtd. Pessoa</strong>
          <input
            type="number"
            id="number"
            class="form-control quantity-input"
            v-model="plano.qtdPessoa"
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
          <b-button v-if="this.$props.showActions">X</b-button>
        </div>

        <div>
          <div class="carrinho-box">
            <h3 style="padding: 16px;margin-right: 5px;">Total</h3>
            <h4></h4>
            <h4>
              <span class="price">R$ {{formatPrice(plano.valorTitular*plano.qtdPessoa)}}</span>
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
import { mapState } from "vuex";

export default {
  name: "Carrinho",
  computed: mapState(["plano"]),
  props: { showActions: Boolean },
  data: function() {
    return { plano: { qtdPessoa: 1 } };
  },
  methods: {
    finalizarCompra() {
      this.$store.commit("setPlano", this.plano);
      this.$router.push({ path: `/checkout` });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    async loadDetail() {
      if (this.$route.params.idPlano) {
        const url = `${baseApiUrl}/planos/${this.$route.params.idPlano}`;
        const res = await axios.get(url);
        if (res.data) {
          this.plano = res.data;
          this.plano.qtdPessoa = 1;
        }
      } else {
        if (this.$store.state.plano) {
          this.plano = this.$store.state.plano;
        }
      }
    }
  },
  mounted() {
    this.loadDetail();
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