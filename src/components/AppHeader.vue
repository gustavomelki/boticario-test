<template>
  <header class="app-header">
    <div class="app-header__container container">
      <router-link :to="{ name: 'dashboard' }" title="Voltar ao início">
        <img
          src="@/assets/images/icone-grupo.png"
          alt="Ícone Grupo Boticário"
          class="app-header__icon"
      /></router-link>
      <button class="app-header__btn--toggle">
        <font-awesome-icon icon="bars" />
      </button>
      <div class="app-header__collapse">
        <button class="app-header__btn--close">
          <font-awesome-icon icon="times" />
        </button>
        <nav-header class="app-header__nav" />
        <cashback
          class="app-header__cashback"
          label="Saldo de cashback"
          value="R$ 15.900,00"
        />
        <div class="app-header__user-info">
          <div
            class="app-header__avatar"
            style="background-image: url('https://accounts-avatar.empiricus.com.br/a86d2890-2699-44f0-9f04-a10fcfbad25e.jpeg')"
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
import Cashback from "@/components/Cashback";
import NavHeader from "@/components/NavHeader";
export default {
  name: "AppHeader",
  components: {
    Cashback,
    NavHeader
  }
};
</script>
