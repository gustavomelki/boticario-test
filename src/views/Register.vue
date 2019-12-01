<template>
  <div class="page-register">
    <div class="card card--grey-light">
      <div>
        <h3 class="card__title">Cadastro de revendedor(a)</h3>
        <p class="card__description">
          Digite abaixo seus dados de cadastro
        </p>
      </div>
      <form
        role="form"
        ref="form"
        class="form-register"
        @submit.prevent="onSubmit"
      >
        <div
          class="input__container"
          :class="{ error: $v.fullname.$invalid && required }"
        >
          <input
            class="form-register__input input--default"
            :class="{ error: $v.fullname.$error }"
            v-model.trim="fullname"
            type="text"
            name="fullname"
            value=""
            placeholder="Nome Completo"
          />
          <span
            class="form__input-message"
            v-if="!$v.fullname.required && required"
            >Obrigatório</span
          >
        </div>
        <div
          class="input__container"
          :class="{ error: $v.cpf.$invalid && required }"
        >
          <input
            class="form-register__input input--default"
            :class="{ error: $v.cpf.$error }"
            v-model.trim="cpf"
            type="tel"
            name="cpf"
            value=""
            placeholder="CPF (apenas números)"
            v-mask="'###.###.###-##'"
          />
          <span class="form__input-message" v-if="!$v.cpf.cpf && required"
            >CPF inválido</span
          >
        </div>
        <div
          class="input__container"
          :class="{ error: $v.email.$invalid && required }"
        >
          <input
            class="form-register__input input--default"
            :class="{ error: $v.email.$error }"
            v-model.trim="email"
            type="email"
            name="email"
            value=""
            placeholder="E-mail"
          />
          <span
            class="form__input-message"
            v-if="!$v.email.required && required"
            >Obrigatório</span
          >
          <span class="form__input-message" v-if="!$v.email.email"
            >Ex: email@domain.com</span
          >
        </div>
        <div
          class="input__container"
          :class="{ error: $v.password.$invalid && required }"
        >
          <input
            class="form-register__input input--default"
            :class="{ error: $v.password.$error }"
            v-model.trim="password"
            type="password"
            name="password"
            value=""
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
        <div
          class="input__container"
          :class="{ error: $v.repeatPassword.$invalid && required }"
        >
          <input
            class="form-register__input input--default"
            :class="{ error: $v.repeatPassword.$error }"
            v-model.trim="repeatPassword"
            type="password"
            name="repeatPassword"
            value=""
            placeholder="Senha novamente"
          />
          <span
            class="form__input-message"
            v-if="!$v.repeatPassword.sameAsPassword"
            >Senhas devem ser iguais</span
          >
        </div>
        <button
          type="submit"
          class="form-register__btn btn-grey-dark"
          title="Cadastrar"
        >
          Criar conta
        </button>
      </form>
    </div>
    <div class="page-register__links external__links">
      <div>
        <router-link id="external__link--login" :to="{ name: 'login' }" class="external__link"
          >Já tem uma conta? Clique aqui para acessar</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import cpf from "@/utils/validators/cpf";
export default {
  name: "Register",
  directives: { mask },
  data() {
    return {
      cpf: "",
      email: "",
      fullname: "",
      password: "",
      repeatPassword: "",
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
    cpf: {
      cpf
    },
    email: {
      required,
      email
    },
    fullname: {
      required
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs("password")
    }
  }
};
</script>
