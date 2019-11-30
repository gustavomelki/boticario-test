<template>
  <div class="page-purchases-register">
    <h1>Cadastro de Compras</h1>
    <p>Preencha os campos para efetuar o cadastro da sua compra</p>
    <div class="internal__card card card--white">
      <form role="form" class="form-purchases-register">
        <div class="input-group">
          <input
            type="text"
            placeholder="Código da Compra"
            class="form-purchases-register__input input-grey"
          />
          <input
            type="tel"
            placeholder="Data da Compra"
            class="form-purchases-register__input input-grey"
            v-mask="'##/##/####'"
          />
        </div>
        <div class="input-group">
          <input
            type="tel"
            placeholder="Valor da Compra"
            class="form-purchases-register__input input-grey"
            v-money="money"
            v-model.lazy="price"
          />
          <div class="page-purchases-register__cashback">
            <cashback label="Cashback gerado:" value="R$ 0,00" />
          </div>
        </div>
        <button
          type="submit"
          class="form-purchases-register__btn btn-grey-dark"
          title="Salvar"
        >
          Salvar
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import Cashback from "@/components/Cashback";
export default {
  name: "PurchasesRegister",
  components: {
    Cashback
  },
  directives: { mask },
  data() {
    return {
      price: "",
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ "
      }
    };
  }
};
</script>
