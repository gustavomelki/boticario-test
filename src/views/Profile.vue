<template>
  <div class="page-profile">
    <h1>Editar Perfil</h1>
    <p>Preencha os campos para editar o seu perfil</p>
    <div class="internal__card card card--white">
      <form
        role="form"
        ref="form"
        class="form-profile"
        @submit.prevent="onSubmit"
      >
        <div class="page-profile__avatar-container">
          <div
            class="page-profile__avatar"
            style="background-image: url('https://accounts-avatar.empiricus.com.br/a86d2890-2699-44f0-9f04-a10fcfbad25e.jpeg')"
          />
        </div>
        <div class="form-profile__fields">
          <div class="input__group">
            <div
              class="form-profile__input-container input__container"
              :class="{ error: $v.fullname.$invalid && required }"
            >
              <input
                class="form-profile__input input--grey"
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
              class="form-profile__input-container input__container"
              :class="{ error: $v.cpf.$invalid && required }"
            >
              <input
                class="form-profile__input input--grey"
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
          </div>
          <div class="input__group">
            <div
              class="form-profile__input-container input__container"
              :class="{ error: $v.email.$invalid && required }"
            >
              <input
                class="form-profile__input input--grey"
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
          </div>
          <div class="input__group">
            <div
              class="form-profile__input-container input__container"
              :class="{ error: $v.password.$invalid && required }"
            >
              <input
                class="form-profile__input input--grey"
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
              class="form-profile__input-container input__container"
              :class="{ error: $v.repeatPassword.$invalid && required }"
            >
              <input
                class="form-profile__input input--grey"
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
          </div>
          <button
            type="submit"
            class="form-profile__btn btn-grey-dark"
            title="Salvar"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import cpf from "@/utils/validators/cpf";
export default {
  name: "Profile",
  directives: { mask },
  data() {
    return {
      cpf: "32018125877",
      email: "contato@gustavomelki.com.br",
      fullname: "Gustavo Melki Portaluri",
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
