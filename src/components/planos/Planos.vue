<template>
  <div class="planos">
    <div class="pricing-text section-header text-center">
      <h2 class="text-center" id="pricing-table-heading">Planos odontológicos</h2>
      <div class="desc-text">
        <p>Escolha o plano que atenda melhor suas necessidades</p>
      </div>
    </div>
    <div class="row pricing-tables">
      <div class="col-12 col-md-4 col-lg-4 pricing-tables">
        <div class="pricing-table text-center">
          <div class="pricing-details">
            <h3>
              BRONZE
              <br />
            </h3>
            <h1 style="color: rgb(0,92,80);">
              <span></span>&nbsp;15,00
            </h1>
            <h1 style="color: rgb(0,92,80);font-size: 15px;">
              <span></span>&nbsp;por mês
            </h1>
            <ul>
              <li>
                Urgência e Emergência 24h
                <br />
              </li>
              <li>Restaurações metálicas</li>
              <li>
                Limpeza a cada 6 meses
                <br />
              </li>
              <li>
                Valor por pessoa
                <br />
              </li>
              <li>
                <br />
              </li>
            </ul>
          </div>
          <div class="text-center plan-button">
            <b-button class="button-planos" @click="comprarItem(3)">Adquirir</b-button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-4 pricing-tables">
        <div class="pricing-table text-center">
          <div class="pricing-details">
            <h3>PRATA</h3>
            <h1 style="color: rgb(0,92,80);">
              <span></span>&nbsp;19.99
            </h1>
            <h1 style="color: rgb(0,92,80);font-size: 15px;">
              <span></span>&nbsp;por mês
            </h1>
            <ul>
              <li>
                Urgência e Emergência 24h
                <br />
              </li>
              <li>
                Restaurações resina
                <br />
              </li>
              <li>
                Limpeza a cada 4 meses
                <br />
              </li>
              <li>Aparelho Ortodôntico Metálico</li>
            </ul>
          </div>
          <div class="plan-button">
            <b-button class="button-planos" @click="comprarItem(3)">Adquirir</b-button>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4 col-lg-4 pricing-tables">
        <div class="pricing-table text-center">
          <div class="pricing-details">
            <h3>OURO</h3>
            <h1 style="color: rgb(0,92,80);">
              <span></span>&nbsp;29.99
            </h1>
            <h1 style="color: rgb(0,92,80);font-size: 15px;">
              <span></span>&nbsp;por mês
            </h1>
            <ul>
              <li>
                Urgência e Emergência 24h
                <br />
              </li>
              <li>
                Restaurações resina
                <br />
              </li>
              <li>
                Limpeza a cada 4 meses
                <br />
              </li>
              <li>
                Aparelho Ortodôntico Metálico
                <br />
              </li>
              <li>
                Implantes de titânio
                <br />
              </li>
              <li>
                Cirurgias de alta complexidade
                <br />
              </li>
            </ul>
          </div>
          <div class="plan-button">
            <b-button class="button-planos" @click="comprarItem(3)">Adquirir</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "Planos",
  data: function() {
    return {};
  },
  methods: {
    comprarItem(id) {
      this.$router.push({ path: `/carrinho/${id}` });
    }
  },
  mounted() {}
};
</script>

<style >
.planos {
  margin-left: 20%;
  margin-top: 4%;
  margin-right: 20%;
}
.pricing-table.text-center {
  padding: 45px;
  border: 1px solid #ccc;
  transition: all 0.3s ease-in-out;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  border-radius: 10px;
}
.pricing-table.text-center:hover,
.pricing-table.text-center:focus {
  transform: translateY(-0.25em);
  -webkit-box-shadow: -1px 1px 28px -8px rgba(71, 71, 71, 1);
  -moz-box-shadow: -1px 1px 28px -8px rgba(71, 71, 71, 1);
  box-shadow: -1px 1px 28px -8px rgba(71, 71, 71, 1);
  border-color: #3ecf8e;
}

#pricing-table-heading {
  font-size: 35px;
  font-weight: 600;
  position: relative;
  line-height: 40px;
  margin-bottom: 12px;
}
.pricing-table ul {
  padding-bottom: 28px;
  list-style: None;
  color: #5e629c;
  display: block;
  line-height: 33px;
}
</style>