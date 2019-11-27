<template>
  <div class="page-login external">
    <div class="external__container">
      <img
        src="@/assets/images/icone-grupo.png"
        alt="Ícone Grupo Boticário"
        class="external__icon"
      />
      <div class="external__card card">
        <div>
          <h3 class="external__title">Acesse sua conta</h3>
          <p class="external__description">
            Digite abaixo seus dados de acesso
          </p>
        </div>
        <form role="form" class="form-login">
          <input
            type="email"
            placeholder="E-mail"
            class="form-login__input input-default"
          />
          <input
            type="password"
            placeholder="Senha"
            class="form-login__input input-default"
          />
          <button type="submit" class="form-login__btn">Entrar</button>
        </form>
      </div>
      <div class="page-login__links external__links">
        <div>
          <a href="#" class="external__link">Esqueceu a senha?</a>
        </div>
        <div>
          <router-link :to="{ name: 'register' }" class="external__link"
            >Criar novo usuário</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
