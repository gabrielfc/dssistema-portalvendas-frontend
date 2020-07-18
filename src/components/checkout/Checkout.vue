<template>
  <div class="checkout">
    <DadosCliente />

    <Carrinho :showActions="false" />

    <Pagamento />
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import DadosCliente from "@/components/dadosCliente/DadosCliente";
import Carrinho from "@/components/carrinho/Carrinho";
import Pagamento from "@/components/pagamento/Pagamento";
import axios from "axios";

export default {
  name: "Checkout",
  components: { DadosCliente, Carrinho, Pagamento },
  data: function() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style >
.checkout {
  width: 60%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: initial;
  align-content: initial;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>