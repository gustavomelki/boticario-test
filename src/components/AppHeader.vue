<template>
  <header>
    <div class="container">
      <img src="@/assets/images/icone-grupo.png" alt="Ícone Grupo Boticário" />
      <nav>
        <ul>
          <li>
            <router-link :to="{ name: 'dashboard' }" title="Suas Compras"
              >Suas Compras</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'register' }" title="Cadastrar Compra"
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
