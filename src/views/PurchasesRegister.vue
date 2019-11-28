<template>
  <div class="page-purchases-register">
    <h1>Cadastro de Compras</h1>
    <p>Preencha os campos para efetuar o cadastro da sua compra</p>
    <div class="card card--white">
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
  </div>
</template>
