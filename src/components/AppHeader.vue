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
        <div class="app-header__cashback cashback">
          <span class="cashback__label">Saldo de cashback</span>
          <span class="cashback__value">R$ 15.900,00</span>
        </div>
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
import NavHeader from "@/components/NavHeader";
export default {
  name: "AppHeader",
  components: {
    NavHeader
  }
};
</script>
