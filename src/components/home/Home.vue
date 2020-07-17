<template>
  <div class="dashboard container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
      </ol>
    </nav>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "Home",
  data: function() {
    return { dashboard: {} };
  },
  methods: {},
  mounted() {}
};
</script>

<style >
.dashboard {
  font-size: 0.7rem;
}
.border-4 {
  border-style: solid;
  border-width: 4px;
}
</style>