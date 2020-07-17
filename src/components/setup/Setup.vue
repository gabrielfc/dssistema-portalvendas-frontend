<template>
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Administrador</li>
        <li class="breadcrumb-item active" aria-current="page">Configurações</li>
      </ol>
    </nav>
    <div class="card shadow">
      <div class="card-header py-3">Informe os dados para configurar o sistema</div>
      <div class="card-body"></div>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "Setup",
  data: function() {
    return {
      setup: {}
    };
  },
  methods: {},
  mounted() {}
};
</script>

<style >
</style>