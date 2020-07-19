<template>
  <div class="form-container" style="height: 700px;">
    <h2 class="text-center">
      <strong>Dados pessoais</strong>
    </h2>
    <div class="form-group">
      <input
        class="form-control"
        type="text"
        name="email"
        placeholder="Nome"
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
        required
        style="margin-top: 16px;"
      />
      <input
        class="form-control"
        type="text"
        name="password-repeat"
        placeholder="E-mail"
        required
        style="margin-top: 13px;"
      />
      <input
        class="form-control"
        type="text"
        name="password-repeat"
        placeholder="Telefone"
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
      placeholder="Logradouro"
      required
    />
    <input
      class="form-control"
      type="text"
      name="password-repeat"
      placeholder="Complemento"
      style="margin-top: 13px;"
    />
    <input
      class="form-control"
      type="text"
      required
      name="password-repeat"
      placeholder="Bairro"
      style="margin-top: 15px;"
    />
    <input
      class="form-control"
      type="text"
      required
      name="password-repeat"
      placeholder="Cidade"
      style="margin-top: 12px;"
    />
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "DadosCliente",
  data: function() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style >
</style>