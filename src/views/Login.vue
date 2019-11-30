<template>
  <div class="page-login">
    <div class="card card--grey-light">
      <div>
        <h3 class="card__title">Acesse sua conta</h3>
        <p class="card__description">
          Digite abaixo seus dados de acesso
        </p>
      </div>
      <form
        role="form"
        ref="form"
        class="form-login"
        @submit.prevent="onSubmit"
      >
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
            value=""
            placeholder="E-mail"
          />
          <span class="error--message" v-if="!$v.email.required && required"
            >Obrigatório</span
          >
          <span class="error--message" v-if="!$v.email.email"
            >Ex: email@domain.com</span
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
            value=""
            placeholder="Senha"
          />
          <span class="error--message" v-if="!$v.password.required && required"
            >Obrigatório</span
          >
          <span class="error--message" v-if="!$v.password.minLength"
            >Mínimo {{ $v.password.$params.minLength.min }} caracteres</span
          >
        </div>
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
        <router-link :to="{ name: 'register' }" class="external__link"
          >Criar novo usuário</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      required: false
    };
  },
  methods: {
    onSubmit() {
      this.required = true;
      if (this.$v.$invalid) return;
      this.required = false;
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  }
};
</script>
