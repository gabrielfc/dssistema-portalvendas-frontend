<template>
  <b-form @submit="onSubmit">
    <div class="checkout">
      <div class="form-container" style="height: 700px; flex-direction:  column;">
        <h2 class="text-center">
          <strong>Dados pessoais</strong>
        </h2>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            name="email"
            placeholder="Nome"
            v-model="cliente.nome"
            required
            style="max-width: auto;min-width: 17;margin-right: 0px;"
          />
        </div>
        <div class="form-group">
          <input class="form-control" type="text" name="password-repeat" placeholder="CPF/CNPJ" />
          <input
            class="form-control"
            type="text"
            name="password-repeat"
            placeholder="Data Nascimento"
            v-model="cliente.dataNascimento"
            required
            style="margin-top: 16px;"
          />
          <input
            class="form-control"
            type="text"
            name="password-repeat"
            placeholder="E-mail"
            v-model="cliente.email"
            required
            style="margin-top: 13px;"
          />
          <input
            class="form-control"
            type="text"
            name="password-repeat"
            placeholder="Telefone"
            v-model="cliente.telefone"
            required
            style="margin-top: 14px;"
          />
        </div>
        <h2 class="text-center">
          <strong>Endereço</strong>
        </h2>
        <input
          class="form-control"
          type="text"
          name="password-repeat"
          v-model="cliente.logradouro"
          placeholder="Logradouro"
          required
        />
        <input
          class="form-control"
          type="text"
          name="password-repeat"
          placeholder="Complemento"
          v-model="cliente.complemento"
          style="margin-top: 13px;"
        />
        <input
          class="form-control"
          type="text"
          required
          name="password-repeat"
          v-model="cliente.bairro"
          placeholder="Bairro"
          style="margin-top: 15px;"
        />
        <input
          class="form-control"
          type="text"
          required
          name="password-repeat"
          v-model="cliente.cidade"
          placeholder="Cidade"
          style="margin-top: 12px;"
        />
      </div>

      <Carrinho :showActions="false" />

      <div class="form-container" style="margin-top:20px; flex-direction:  column;">
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
      </div>
    </div>
  </b-form>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import Carrinho from "@/components/carrinho/Carrinho";
import axios from "axios";

export default {
  name: "Checkout",
  components: { Carrinho },
  data: function() {
    return { cliente: {}, formaPagamento: null };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      const method = "post";
      axios[method](`${baseApiUrl}/pedidos`, this)
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