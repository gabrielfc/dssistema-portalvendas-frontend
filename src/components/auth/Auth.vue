<template>
  <b-container>
    <b-row class="authPrincipal">
      <b-col class="container container-style col-md-9 col-lg-12 col-xl-10 container-content">
        <div class="card shadow-lg o-hidden border-0 my-5">
          <div class="card-body p-0 border-0">
            <b-row class="row justify-content-center">
              <b-col class="col-lg-12">
                <div class="container-login-style">
                  <div class="text-center">
                    <h4 class="titulo">Seja bem vindo!</h4>
                  </div>
                  <b-form @submit="onSubmit" class="user">
                    <b-form-group>
                      <b-form-input
                        v-model="user.email"
                        class="form-style"
                        type="email"
                        id="exampleInputEmail"
                        aria-describedby="emailHelp"
                        placeholder="Usuário"
                        name="email"
                      ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                      <b-form-input
                        v-model="user.password"
                        class="form-style"
                        type="password"
                        id="exampleInputPassword"
                        placeholder="Senha"
                        name="password"
                      ></b-form-input>
                    </b-form-group>
                    <b-button
                      class="button-style btn btn-primary btn-block text-white btn-user"
                      variant="primary"
                      type="submit"
                      role="button"
                    >Entrar</b-button>
                    <hr />
                  </b-form>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { baseApiUrl, showError, userKey } from "@/global";
import axios from "axios";
export default {
  name: "Auth",
  data: function() {
    return {
      showSignup: false,
      user: {}
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      axios
        .post(`${baseApiUrl}/users/login`, this.user)
        .then(res => {
          this.$store.commit("setUser", res.data);
          localStorage.setItem(userKey, JSON.stringify(res.data));
          this.$router.push({ path: "/" });
        })
        .catch(showError);
    }
  }
};
</script>

<style>
.authPrincipal {
  display: flex;
  justify-content: center;
  margin-top: 10px;

  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.button-style {
  background-color: #4e73df;
  border-color: #4e73df;
  font-size: 13px;
  padding: 10px;
}
::placeholder {
  font-size: 14px;
}
.container-login-style {
  padding: 60px;
  margin-top: 20px;
}
.image-login {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
@media (max-width: 479px) {
  .titulo {
    font-size: 30px;
    margin-bottom: 8px;
  }
  .container-login-style {
    padding-left: 25px;
    padding-right: 25px;
  }
  .container-content {
    min-width: 450px;
    margin-left: 7px;
  }
  hr {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
@media (max-width: 425px) {
  .titulo {
    font-size: 30px;
    margin-bottom: 8px;
  }
  .container-content {
    min-width: 380px;
    margin-left: 7px;
  }
  hr {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
@media (max-width: 375px) {
  .titulo {
    font-size: 30px;
    margin-bottom: 8px;
  }
  .container-login-style {
    padding-left: 20px;
    padding-right: 20px;
  }
  .container-content {
    min-width: 350px;
    margin-left: 10px;
  }
  hr {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
@media (max-width: 340px) {
  .titulo {
    font-size: 30px;
    margin-bottom: 8px;
  }
  .container-login-style {
    padding-left: 20px;
    padding-right: 20px;
  }
  .container-content {
    min-width: 330px;
  }
  hr {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
</style>