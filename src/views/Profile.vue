<template>
  <div class="page-profile">
    <app-header />
    <main class="container">
      <h1>Editar Perfil</h1>
      <p>Preencha os campos para editar o seu perfil</p>
      <div>
        <form role="form" class="form-profile">
          <input
            type="text"
            placeholder="Nome Completo"
            class="form-profile__input input-default"
          />
          <input
            type="tel"
            placeholder="CPF (apenas números)"
            class="form-profile__input input-default"
          />
          <input
            type="email"
            placeholder="E-mail"
            class="form-profile__input input-default"
          />
          <input
            type="password"
            placeholder="Senha"
            class="form-profile__input input-default"
          />
          <button type="submit" class="form-profile__btn" title="Salvar">
            Salvar
          </button>
        </form>
      </div>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
export default {
  name: "Dashboard",
  components: {
    AppFooter,
    AppHeader
  }
};
</script>
