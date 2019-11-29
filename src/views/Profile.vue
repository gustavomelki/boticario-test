<template>
  <div class="page-profile">
    <h1>Editar Perfil</h1>
    <p>Preencha os campos para editar o seu perfil</p>
    <div class="card card--white">
      <form role="form" class="form-profile">
        <div class="page-profile__avatar-container">
          <div
            class="page-profile__avatar"
            style="background-image: url('https://accounts-avatar.empiricus.com.br/a86d2890-2699-44f0-9f04-a10fcfbad25e.jpeg')"
          />
        </div>
        <div class="form-profile__fields">
          <div class="input-group">
            <input
              type="text"
              placeholder="Nome Completo"
              class="form-profile__input input-grey"
              v-model="name"
            />
            <input
              type="tel"
              placeholder="CPF (apenas números)"
              class="form-profile__input input-grey"
              v-model="cpf"
            />
          </div>
          <div class="input-group">
            <input
              type="email"
              placeholder="E-mail"
              class="form-profile__input input-grey"
              v-model="email"
            />
          </div>
          <div class="input-group">
            <input
              type="password"
              placeholder="Senha"
              class="form-profile__input input-grey"
              v-model="password"
            />
            <input
              type="password"
              placeholder="Senha novamente"
              class="form-profile__input input-grey"
              v-model="password_repeat"
            />
          </div>
          <button
            type="submit"
            class="form-profile__btn btn-grey-dark"
            title="Salvar"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      cpf: "32018125877",
      email: "contato@gustavomelki.com.br",
      name: "Gustavo Melki Portaluri",
      password: "",
      password_repeat: ""
    };
  }
};
</script>
