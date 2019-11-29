<template>
  <header class="app-header">
    <div class="app-header__container container">
      <img
        src="@/assets/images/icone-grupo.png"
        alt="Ícone Grupo Boticário"
        class="app-header__icon"
      />
      <div class="app-header__collapse">
        <nav-header class="app-header__nav" />
        <div class="cashback">
          <span class="cashback__label">Saldo de cashback</span>
          <span class="cashback__value">R$ 900,00</span>
        </div>
        <div class="app-header__user-info">
          <div
            class="app-header__avatar"
            style="background-image: url('https://cdn.icon-icons.com/icons2/1736/PNG/512/4043236-avatar-boy-male-portrait_113250.png')"
          />
          <div class="app-header__info">
            <span class="app-header__welcome">Gustavo M.</span>
            <button class="app-header__logout" title="Sair">Sair</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavHeader from "@/components/NavHeader";
export default {
  name: "AppHeader",
  components: {
    NavHeader
  }
};
</script>
