<template>
  <nav class="nav-header">
    <ul class="nav-header__list">
      <li class="nav-header__item">
        <router-link
          :to="{ name: 'dashboard' }"
          title="Suas Compras"
          class="nav-header__link"
          >Suas Compras</router-link
        >
      </li>
      <li class="nav-header__item">
        <router-link
          class="nav-header__link"
          :to="{ name: 'purchases-register' }"
          title="Cadastrar Compra"
          >Cadastrar Compra</router-link
        >
      </li>
      <li class="nav-header__item">
        <router-link
          :to="{ name: 'profile' }"
          title="Editar Perfil"
          class="nav-header__link"
          >Editar Perfil</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavHeader"
};
</script>
