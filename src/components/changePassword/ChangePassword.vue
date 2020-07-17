<template>
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Administrador</li>
        <li class="breadcrumb-item active" aria-current="page">Alterar senha</li>
      </ol>
    </nav>
    <div class="card shadow">
      <div class="card-header py-3">Informe os dados para alterar sua senha</div>
      <div class="card-body">
        <form submit.prevent="onSubmit">
          <label>Nova senha</label>
          <input class="form-control" type="password" autofocus required v-model="user.password" />
          <label style="margin-top: 14px;">Confirmação senha</label>
          <input
            class="form-control"
            type="password"
            autofocus
            required
            v-model="user.confirmPassword"
          />

          <a
            class="btn btn-primary btn-sm"
            role="button"
            style="margin-top: 14px;"
            @click="save"
          >&nbsp;Salvar</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "ChangePassword",
  data: function() {
    return {
      user: {}
    };
  },
  methods: {
    save() {
      const method = "put";
      axios[method](`${baseApiUrl}/users/changePass`, this.user)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.user = {};
        })
        .catch(showError);
    }
  }
};
</script>

<style >
.changePass {
  font-size: 1.7rem;
}
</style>