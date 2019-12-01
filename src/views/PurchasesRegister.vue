<template>
  <div class="page-purchases-register">
    <h1>Cadastro de Compras</h1>
    <p>Preencha os campos para efetuar o cadastro da sua compra</p>
    <div class="internal__card card card--white">
      <form
        role="form"
        ref="form"
        class="form-purchases-register"
        @submit.prevent="onSubmit"
      >
        <div class="input__group">
          <div
            class="form-purchases-register__input-container input__container"
            :class="{ error: $v.codePurchase.$invalid && required }"
          >
            <input
              class="form-purchases-register__input input--grey"
              :class="{ error: $v.codePurchase.$error }"
              v-model.trim="codePurchase"
              type="text"
              name="codePurchase"
              value=""
              placeholder="Código da Compra"
            />
            <span
              class="form__input-message"
              v-if="!$v.codePurchase.required && required"
              >Obrigatório</span
            >
            <span class="form__input-message" v-if="!$v.codePurchase.minLength"
              >Mínimo
              {{ $v.codePurchase.$params.minLength.min }} caracteres</span
            >
          </div>
          <div
            class="form-purchases-register__input-container input__container"
            :class="{ error: $v.datePurchase.$invalid && required }"
          >
            <input
              class="form-purchases-register__input input--grey"
              :class="{ error: $v.datePurchase.$error }"
              v-model.trim="datePurchase"
              type="tel"
              name="datePurchase"
              value=""
              placeholder="Data da Compra"
              v-mask="'##/##/####'"
            />
            <span
              class="form__input-message"
              v-if="!$v.datePurchase.required && required"
              >Obrigatório</span
            >
            <span class="form__input-message" v-if="!$v.datePurchase.minLength"
              >Data inválida</span
            >
          </div>
        </div>
        <div class="input__group">
          <div
            class="form-purchases-register__input-container input__container"
          >
            <input
              class="form-purchases-register__input input--grey"
              v-model.lazy="valuePurchase"
              type="tel"
              name="valuePurchase"
              value=""
              placeholder="Valor da Compra"
              v-money="money"
            />
          </div>
          <div
            class="form-purchases-register__input-container input__container"
          >
            <cashback
              class="page-purchases-register__cashback"
              label="Cashback gerado:"
              :value="cashback"
            />
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
import { required, minLength } from "vuelidate/lib/validators";
import Cashback from "@/components/Cashback";
export default {
  name: "PurchasesRegister",
  components: {
    Cashback
  },
  directives: { mask },
  data() {
    return {
      codePurchase: "",
      cashback: "0,00",
      datePurchase: "",
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ "
      },
      required: false,
      valuePurchase: ""
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
    },
    onSubmit() {
      this.required = true;
      if (this.$v.$invalid) return;
      this.required = false;
    }
  },
  watch: {
    valuePurchase(value) {
      this.calculateCashback(value);
    }
  },
  validations: {
    codePurchase: {
      required,
      minLength: minLength(5)
    },
    datePurchase: {
      required,
      minLength: minLength(10)
    }
  }
};
</script>
