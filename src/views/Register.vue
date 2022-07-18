<template>
  <div class="page-register">
    <div class="card card--grey-light">
      <div>
        <h3 class="card__title">Cadastro de revendedor(a)</h3>
        <p class="card__description">Digite abaixo seus dados de cadastro</p>
      </div>
      <AppLoading class="form-login__loading" v-if="state.loading" />
      <form
        role="form"
        ref="form"
        class="form-register"
        @submit.prevent="onSubmit"
        v-show="!state.loading"
      >
        <p v-if="loginError" class="form__message" id="message-error">
          {{ loginError }}
        </p>
        <div
          class="input__container"
          :class="{
            error:
              form.fullname.value && $v.fullname.$invalid && state.required,
          }"
        >
          <input
            class="form-register__input input--default"
            :class="{ error: $v.fullname.$error }"
            v-model.trim="form.fullname.value"
            type="text"
            name="fullname"
            placeholder="Nome Completo"
          />
          <span
            class="form__input-message"
            v-if="!$v.fullname.required && state.required"
            >Obrigatório</span
          >
        </div>
        <div
          class="input__container"
          :class="{
            error: form.cpf.value && $v.cpf.$invalid && state.required,
          }"
        >
          <input
            class="form-register__input input--default"
            :class="{ error: $v.cpf.$error }"
            v-model.trim="form.cpf.value"
            type="tel"
            name="cpf"
            placeholder="CPF (apenas números)"
            v-mask="'###.###.###-##'"
          />
          <span class="form__input-message" v-if="!$v.cpf.cpf && state.required"
            >CPF inválido</span
          >
        </div>
        <div
          class="input__container"
          :class="{
            error: form.email.value && $v.email.$invalid && state.required,
          }"
        >
          <input
            class="form-register__input input--default"
            :class="{ error: $v.email.$error }"
            v-model.trim="form.email.value"
            type="email"
            name="email"
            placeholder="E-mail"
          />
          <span
            class="form__input-message"
            v-if="!$v.email.required && state.required"
            >Obrigatório</span
          >
          <span class="form__input-message" v-if="!$v.email.email"
            >Ex: email@domain.com</span
          >
        </div>
        <div
          class="input__container"
          :class="{
            error:
              form.password.value && $v.password.$invalid && state.required,
          }"
        >
          <input
            class="form-register__input input--default"
            :class="{ error: $v.password.$error }"
            v-model.trim="form.password.value"
            type="password"
            name="password"
            placeholder="Senha"
          />
          <span
            class="form__input-message"
            v-if="!$v.password.required && state.required"
            >Obrigatório</span
          >
          <span class="form__input-message" v-if="!$v.password.minLength"
            >Mínimo {{ $v.password.$params.minLength.min }} caracteres</span
          >
        </div>
        <div
          class="input__container"
          :class="{
            error:
              form.repeatPassword.value &&
              $v.repeatPassword.$invalid &&
              state.required,
          }"
        >
          <input
            class="form-register__input input--default"
            :class="{ error: $v.repeatPassword.$error }"
            v-model.trim="form.repeatPassword.value"
            type="password"
            name="repeatPassword"
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
        <router-link
          id="external__link--login"
          :to="{ name: 'login' }"
          class="external__link"
          >Já tem uma conta? Clique aqui para acessar</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, reactive } from "vue";
import { mask } from "vue-the-mask";
import { useStore } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import cpf from "@/utils/validators/cpf";
import AppLoading from "@/components/AppLoading.vue";

export default {
  name: "Register",
  directives: { mask },
  setup() {
    // access store
    const store = useStore();

    // Data
    const form = ref({
      cpf: "",
      email: "",
      fullname: "",
      password: "",
      repeatPassword: "",
    });

    const state = reactive({
      required: false,
      loading: false,
    });

    // validations
    const rules = {
      cpf: {
        cpf,
      },
      email: {
        required,
        email,
      },
      fullname: {
        required,
      },
      password: {
        required,
        minLength: minLength(6),
      },
      repeatPassword: {
        sameAsPassword: sameAs("password"),
      },
    };
    const $v = useVuelidate(rules, form);

    // computed data
    const loginError = computed(() => {
      return store.state.auth.loginError;
    });

    // Methods
    const onSubmit = () => {
      console.log("Submitting Register form...");
      state.required = true;
      if ($v.$invalid) {
        console.warn("There are errors on submit Register form.");
        return;
      }
      state.loading = true;
      state.required = false;
      return store.dispatch("auth/doRegister", {
        email: form.value.email.value,
        password: form.value.password.value,
      });
    };

    const clearMessage = () => {
      return store.commit("auth/loginStop", null);
    };

    // Watch
    watch(loginError, (data) => {
      if (data) state.loading = false;
    });

    return {
      form,
      state,
      $v,
      loginError,
      clearMessage,
      onSubmit,
    };
  },
};
</script>
