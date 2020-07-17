<template>
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Usuários</li>
        <li class="breadcrumb-item active" aria-current="page">Listagem</li>
      </ol>
    </nav>
    <div class="card shadow">
      <div class="card-header py-3">Usuários cadastrados</div>
      <div class="card-body">
        <b-table id="my-table" striped hover :items="dataList" :fields="fields"></b-table>
        <b-pagination
          aria-controls="my-table"
          v-model="page"
          :total-rows="count"
          :per-page="limit"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "User",
  data: function() {
    return {
      fields: [
        {
          key: "name",
          label: "Nome",
          sortable: true
        },
        {
          key: "phoneNumber",
          label: "Telefone",
          sortable: true
        },
        {
          key: "location.city.name",
          label: "Município",
          sortable: true
        }
      ],
      page: 1,
      count: 0,
      limit: 0,
      dataList: []
    };
  },
  methods: {
    async loadInitList() {
      const url = `${baseApiUrl}/quiz/users?page=${this.page}`;
      const res = await axios.get(url);

      if (res.data) {
        this.dataList = res.data.data;
        this.count = res.data.count;
        this.limit = res.data.limit;
      }
    }
  },
  watch: {
    page() {
      this.loadInitList();
    }
  },
  mounted() {
    this.loadInitList();
  }
};
</script>

<style >
</style>