<template>
  <div class="page-register">
    <div class="card card--grey-light">
      <div>
        <h3 class="card__title">Cadastro de revendedor(a)</h3>
        <p class="card__description">
          Digite abaixo seus dados de cadastro
        </p>
      </div>
      <form role="form" class="form-register">
        <input
          type="text"
          placeholder="Nome Completo"
          class="form-register__input input-default"
        />
        <input
          type="tel"
          placeholder="CPF (apenas números)"
          class="form-register__input input-default"
          v-mask="'###.###.###-##'"
        />
        <input
          type="email"
          placeholder="E-mail"
          class="form-register__input input-default"
        />
        <input
          type="password"
          placeholder="Senha"
          class="form-register__input input-default"
        />
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
        <router-link :to="{ name: 'login' }" class="external__link"
          >Já tem uma conta? Clique aqui para acessar</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
export default {
  name: "Register",
  directives: { mask }
};
</script>
