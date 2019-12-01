<template>
  <header class="app-header">
    <div class="app-header__container container">
      <router-link :to="{ name: 'dashboard' }" title="Voltar ao início">
        <img
          src="@/assets/images/icone-grupo.png"
          alt="Ícone Grupo Boticário"
          class="app-header__icon"
      /></router-link>
      <button class="app-header__btn--toggle" @click="showMenuMobile = true">
        <font-awesome-icon icon="bars" />
      </button>
      <div
        class="app-header__collapse"
        :class="showMenuMobile ? 'app-header__collapse--opened' : ''"
      >
        <button class="app-header__btn--close" @click="showMenuMobile = false">
          <font-awesome-icon icon="times" />
        </button>
        <nav-header class="app-header__nav" />
        <cashback
          class="app-header__cashback"
          label="Saldo de cashback"
          :value="cashback"
          :loading="loading"
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
import axios from "axios";
import Cashback from "@/components/Cashback";
import NavHeader from "@/components/NavHeader";
export default {
  name: "AppHeader",
  components: {
    Cashback,
    NavHeader
  },
  data() {
    return {
      cashback: "0,00",
      loading: true,
      showMenuMobile: false
    };
  },
  mounted() {
    this.closeMenuMobile();
    this.getCashback();
    window.addEventListener("keyup", this.keyUp);
  },
  methods: {
    closeMenuMobile() {
      const floatedNav = document.querySelector(".app-header");
      const instance = this;

      document.addEventListener("click", function(evt) {
        if (!instance.showMenuMobile) return;
        const isClickInside = floatedNav.contains(evt.target);
        instance.showMenuMobile = isClickInside;
      });
    },
    getCashback() {
      axios
        .get("http://www.mocky.io/v2/5de3e2b730000086009f78cc")
        .then(res => {
          this.cashback = res.data.cashback_total;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    keyUp(evt) {
      evt.preventDefault();
      if (evt.keyCode === 27) this.showMenuMobile = false;
    }
  },
  watch: {
    $route() {
      this.showMenuMobile = false;
    }
  }
};
</script>
