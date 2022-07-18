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
            :class="{ error: $v.codePurchase.$invalid && state.required }"
          >
            <input
              class="form-purchases-register__input input--grey"
              :class="{ error: $v.codePurchase.$error }"
              v-model.trim="form.codePurchase.value"
              type="text"
              name="codePurchase"
              placeholder="Código da Compra"
            />
            <span
              class="form__input-message"
              v-if="!$v.codePurchase.required && state.required"
              >Obrigatório</span
            >
            <span class="form__input-message" v-if="!$v.codePurchase.minLength"
              >Mínimo
              {{ $v.codePurchase.$params.minLength.min }} caracteres</span
            >
          </div>
          <div
            class="form-purchases-register__input-container input__container"
            :class="{ error: $v.datePurchase.$invalid && state.required }"
          >
            <input
              class="form-purchases-register__input input--grey"
              :class="{ error: $v.datePurchase.$error }"
              v-model.trim="form.datePurchase.value"
              type="tel"
              name="datePurchase"
              placeholder="Data da Compra"
              v-mask="'##/##/####'"
            />
            <span
              class="form__input-message"
              v-if="!$v.datePurchase.required && state.required"
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
              v-model.lazy="form.valuePurchase.value"
              type="tel"
              name="valuePurchase"
              placeholder="Valor da Compra"
              v-money="state.money"
            />
          </div>
          <div
            class="form-purchases-register__input-container input__container"
          >
            <cashback
              class="page-purchases-register__cashback"
              label="Cashback gerado:"
              :value="state.cashback"
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
import { ref, watch, reactive } from "vue";
import { mask } from "vue-the-mask";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import Cashback from "@/components/Cashback.vue";
export default {
  name: "PurchasesRegister",
  components: {
    Cashback,
  },
  directives: { mask },
  setup() {
    // Data
    const form = ref({
      codePurchase: "",
      datePurchase: "",

      valuePurchase: "",
    });

    const state = reactive({
      required: true,
      cashback: "0,00",
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
      },
    });

    // Validations
    const rules = {
      codePurchase: {
        required,
        minLength: minLength(5),
      },
      datePurchase: {
        required,
        minLength: minLength(10),
      },
    };
    const $v = useVuelidate(rules, form);

    // Methods
    const calculateCashback = (val) => {
      const number = val
        .replace("R$ ", "")
        .replace(/\./g, "")
        .replace(",", ".");

      let cashNumber = 0;
      if (number <= 1000) cashNumber = number * 0.1;
      else if (number > 1000 && number <= 2000) cashNumber = number * 0.15;
      else cashNumber = number * 0.2;

      state.cashback = numberToReal(cashNumber);
    };

    const numberToReal = (num) => {
      const number = num.toFixed(2).split(".");
      number[0] = `R$ ${number[0].split(/(?=(?:...)*$)/).join(".")}`;
      return number.join(",");
    };

    const onSubmit = () => {
      console.log("Submitting Purchases Register form...");
      state.required = true;
      if ($v.$invalid) {
        console.warn("There are errors on submit Purchases Register form.");
        return;
      }
      state.required = false;
    };

    // Watch
    watch(form.value.valuePurchase, (value) => {
      calculateCashback(value);
    });

    return {
      form,
      state,
      $v,
      calculateCashback,
      numberToReal,
      onSubmit,
    };
  },
};
</script>
