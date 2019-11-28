<template>
  <div class="page-purchases-register">
    <app-header />
    <main class="container">
      <h1>Cadastro de Compras</h1>
      <p>Preencha os campos para efetuar o cadastro da sua compra</p>
      <div>
        <form role="form" class="form-purchases-register">
          <input
            type="text"
            placeholder="Código da Compra"
            class="form-purchases-register__input input-default"
          />
          <input
            type="tel"
            placeholder="Data da Compra"
            class="form-purchases-register__input input-default"
          />
          <input
            type="tel"
            placeholder="Valor da Compra"
            class="form-purchases-register__input input-default"
          />
          <div>
            <span>Cashback gerado:</span>
            <span>R$ 300,00</span>
          </div>
          <button
            type="submit"
            class="form-purchases-register__btn"
            title="Salvar"
          >
            Salvar
          </button>
        </form>
      </div>
    </main>
    <app-footer />
  </div>
</template>

<script>
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
export default {
  name: "Dashboard",
  components: {
    AppFooter,
    AppHeader
  }
};
</script>
