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
            <cashback label="Cashback gerado:" :value="cashback" />
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
      cashback: "0,00",
      price: "",
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ "
      }
    };
  },
  methods: {
    calculateCashback(val) {
      const number = val
        .replace("R$ ", "")
        .replace(/\./g, "")
        .replace(",", ".");

      let cashNumber = 0;
      if (number <= 1000) cashNumber = number * 0.1;
      else if (number > 1000 && number <= 2000) cashNumber = number * 0.15;
      else cashNumber = number * 0.2;

      this.cashback = this.numberToReal(cashNumber);
    },
    numberToReal(num) {
      const number = num.toFixed(2).split(".");
      number[0] = `R$ ${number[0].split(/(?=(?:...)*$)/).join(".")}`;
      return number.join(",");
    }
  },
  watch: {
    price(value) {
      this.calculateCashback(value);
    }
  }
};
</script>
