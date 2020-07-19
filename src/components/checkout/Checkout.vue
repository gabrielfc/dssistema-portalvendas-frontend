<template>
  <b-form @submit="onSubmit">
    <div class="checkout">
      <DadosCliente />

      <Carrinho :showActions="false" />

      <Pagamento />
    </div>
  </b-form>
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
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const method = "post";
      axios[method](`${baseApiUrl}/pedidos`, this.quiz)
        .then(res => {
          this.$toasted.global.defaultSuccess();
          this.$router.push({ path: "/finalizacao" });
        })
        .catch(showError);
    }
  },
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