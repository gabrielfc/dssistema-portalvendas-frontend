<template>
  <div class="form-container" style="width:60%;">
    <form method="post">
      <h2 class="text-center">
        <strong>Selecione seu perfil</strong>
      </h2>
      <div class="form-group form-inline mt-3 painelCidade">
        <select class="form-control">
          <optgroup label="Selecione seu estado...">
            <option value="12" selected>Selecione seu estado...</option>
            <option value="13">Minas</option>
            <option value="14">Montes claros</option>
          </optgroup>
        </select>
        <select class="form-control ml-2">
          <optgroup label="Selecione sua cidade...">
            <option value="12" selected>Selecione sua cidade...</option>
            <option value="13">Belo Horizonte</option>
            <option value="14">Montes claros</option>
          </optgroup>
        </select>
      </div>
      <div class="form-row">
        <div class="col">
          <div class="form-group text-center">
            <b-button class="button-planos" @click="carregarPlanos(1)">Planos Individuais</b-button>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col">
          <div class="form-group text-center">
            <b-button class="button-planos" @click="carregarPlanos(2)">Planos para sua empresa</b-button>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col">
          <div class="form-group text-center">
            <b-button class="button-planos" @click="carregarPlanos(3)">Servidores publicos</b-button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "Home",
  data: function() {
    return { uf: "", idCidade: "2" };
  },
  methods: {
    carregarPlanos(id) {
      this.$router.push({ path: `/planos/${this.idCidade}/${id}` });
    }
  },
  mounted() {}
};
</script>

<style >
.button-planos {
  margin: 2px;
  background-color: rgb(0, 79, 100);
}
.painelCidade {
  display: flex;
  justify-content: center;
}
</style>