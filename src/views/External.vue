<template>
  <div class="external">
    <div class="external__container">
      <img
        src="@/assets/images/icone-grupo.png"
        alt="Ícone Grupo Boticário"
        class="external__icon"
      />
      <div class="external__card">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>
