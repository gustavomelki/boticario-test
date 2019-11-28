<template>
  <header class="app-header">
    <div class="app-header__container container">
      <img
        src="@/assets/images/icone-grupo.png"
        alt="Ícone Grupo Boticário"
        class="app-header__icon"
      />
      <nav-header />
      <div>
        <span>Cashback acumulado</span>
        <span>R$ 900,00</span>
      </div>
      <div>
        <div>
          <span>Olá, Gustavo</span>
          <button title="Sair">Sair</button>
        </div>
        <div />
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
