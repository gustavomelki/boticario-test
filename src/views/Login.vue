<template>
  <div class="page-login">
    <div class="card card--grey-light">
      <div>
        <h3 class="card__title">Acesse sua conta</h3>
        <p class="card__description">Digite abaixo seus dados de acesso</p>
      </div>
      <AppLoading class="form-login__loading" v-if="state.loading" />
      <form
        role="form"
        ref="form"
        class="form-login"
        @submit.prevent="onSubmit"
        @keyup="clearMessage"
        v-show="!state.loading"
      >
        <p v-if="loginError" class="form__message" id="message-error">
          {{ loginError }}
        </p>
        <div
          class="input__container"
          :class="{ error: $v.email.$invalid && state.required }"
        >
          <input
            class="form-login__input input--default"
            :class="{ error: $v.email.$error }"
            v-model.trim="form.email.value"
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
          />
          <span
            class="form__input-message"
            v-if="!$v.email.required && state.required"
            >Obrigatório</span
          >
          <span class="form__input-message" v-if="!$v.email.email"
            >Ex: email@dominio.com.br</span
          >
        </div>
        <div
          class="input__container"
          :class="{ error: $v.password.$invalid && state.required }"
        >
          <input
            class="form-login__input input--default"
            :class="{ error: $v.password.$error }"
            v-model.trim="form.password.value"
            type="password"
            name="password"
            id="password"
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
        <p class="form__legend">
          e-mail: <em>eve.holt@reqres.in</em> | password: <em>cityslicka</em>
        </p>
        <button
          type="submit"
          class="form-login__btn btn-grey-dark"
          :class="{ 'opacity-25': state.loading }"
          :disabled="state.loading"
        >
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
import { ref, computed, watch, reactive } from "vue";
import { useStore } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import AppLoading from "@/components/AppLoading.vue";

export default {
  name: "Login",
  components: {
    AppLoading,
  },
  setup() {
    // access store
    const store = useStore();

    // Data
    const form = ref({
      email: "",
      password: "",
    });

    const state = reactive({
      loading: false,
      required: true,
    });

    // Validations
    const rules = {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(4),
      },
    };
    const $v = useVuelidate(rules, form);

    // computed data
    const loginError = computed(() => {
      return store.state.auth.loginError;
    });

    // Methods
    const doLogin = (data) => {
      return store.dispatch("auth/doLogin", data);
    };
    const clearMessage = () => {
      return store.commit("auth/loginStop", null);
    };
    const onSubmit = () => {
      store.commit("auth/loginStop", null);
      console.log("Submitting Login form...");
      state.required = true;
      if ($v.$invalid) {
        console.warn("There are errors on submit Login form.");
        return;
      }
      state.loading = true;
      state.required = false;

      console.log(
        "email:",
        form.value.email.value,
        "password:",
        form.value.password.value,
        "loading: ",
        state.loading,
        "required: ",
        state.required
      );

      doLogin({
        email: form.value.email.value,
        password: form.value.password.value,
      });
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
