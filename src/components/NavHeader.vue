<template>
  <nav class="nav-header">
    <ul>
      <li>
        <router-link :to="{ name: 'dashboard' }" title="Suas Compras"
          >Suas Compras</router-link
        >
      </li>
      <li>
        <router-link
          :to="{ name: 'purchases-register' }"
          title="Cadastrar Compra"
          >Cadastrar Compra</router-link
        >
      </li>
      <li>
        <router-link :to="{ name: 'profile' }" title="Editar Perfil"
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
