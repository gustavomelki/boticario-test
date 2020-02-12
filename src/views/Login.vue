<template>
  <div class="page-login">
    <div class="card card--grey-light">
      <div>
        <h3 class="card__title">Acesse sua conta</h3>
        <p class="card__description">
          Digite abaixo seus dados de acesso
        </p>
      </div>
      <app-loading class="form-login__loading" v-if="loading" />
      <form
        role="form"
        ref="form"
        class="form-login"
        @submit.prevent="onSubmit"
        @keyup="clearMessage"
        v-show="!loading"
      >
        <p v-if="loginError" class="form__message" id="message-error">
          {{ loginError }}
        </p>
        <div
          class="input__container"
          :class="{ error: $v.email.$invalid && required }"
        >
          <input
            class="form-login__input input--default"
            :class="{ error: $v.email.$error }"
            v-model.trim="email"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <span
            class="form__input-message"
            v-if="!$v.email.required && required"
            >Obrigatório</span
          >
          <span class="form__input-message" v-if="!$v.email.email"
            >Ex: email@dominio.com.br</span
          >
        </div>
        <div
          class="input__container"
          :class="{ error: $v.password.$invalid && required }"
        >
          <input
            class="form-login__input input--default"
            :class="{ error: $v.password.$error }"
            v-model.trim="password"
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />
          <span
            class="form__input-message"
            v-if="!$v.password.required && required"
            >Obrigatório</span
          >
          <span class="form__input-message" v-if="!$v.password.minLength"
            >Mínimo {{ $v.password.$params.minLength.min }} caracteres</span
          >
        </div>
        <p class="form__legend">
          e-mail: <em>eve.holt@reqres.in</em> | password: <em>cityslicka</em>
        </p>
        <button type="submit" class="form-login__btn btn-grey-dark">
          Entrar
        </button>
      </form>
    </div>
    <div class="page-login__links external__links">
      <div>
        <a href="#" class="external__link">Esqueceu a senha?</a>
      </div>
      <div>
        <router-link
          id="external__link--register"
          :to="{ name: 'register' }"
          class="external__link"
          >Criar novo usuário</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required, email, minLength } from "vuelidate/lib/validators";
import AppLoading from "@/components/AppLoading";
export default {
  name: "Login",
  components: {
    AppLoading
  },
  data() {
    return {
      email: "",
      password: "",
      loading: false,
      required: false
    };
  },
  computed: {
    loginError() {
      return this.$store.state.auth.loginError;
    }
  },
  methods: {
    ...mapActions({ doLogin: "auth/doLogin" }),
    clearMessage() {
      this.$store.commit("auth/loginStop", null);
    },
    onSubmit() {
      console.log("Submitting Login form...");
      this.required = true;
      if (this.$v.$invalid) {
        console.warn("There are errors on submit Login form.");
        return;
      }
      this.loading = true;
      this.required = false;

      this.doLogin({
        email: this.email,
        password: this.password
      });
    }
  },
  watch: {
    loginError(data) {
      if (data) this.loading = false;
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(4)
    }
  }
};
</script>
