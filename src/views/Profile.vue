<template>
  <div class="page-profile">
    <h1>Editar Perfil</h1>
    <p>Preencha os campos para editar o seu perfil</p>
    <div class="card card--white">
      <form role="form" class="form-profile">
        <input
          type="text"
          placeholder="Nome Completo"
          class="form-profile__input input-default"
        />
        <input
          type="tel"
          placeholder="CPF (apenas números)"
          class="form-profile__input input-default"
        />
        <input
          type="email"
          placeholder="E-mail"
          class="form-profile__input input-default"
        />
        <input
          type="password"
          placeholder="Senha"
          class="form-profile__input input-default"
        />
        <button type="submit" class="form-profile__btn" title="Salvar">
          Salvar
        </button>
      </form>
    </div>
  </div>
</template>
