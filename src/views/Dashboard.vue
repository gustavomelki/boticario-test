<template>
  <div class="page-dashboard">
    <h1>Suas Compras</h1>
    <p>Confira seu extrato de compras e a situação de cada uma</p>
    <div class="internal__card card card--white">
      <app-loading
        class="page-dashboard__loading"
        v-if="loading && !purchases"
      />
      <div class="table-container" v-show="!loading || purchases">
        <table
          cellpadding="0"
          cellspacing="0"
          class="table-default"
          v-if="purchases"
        >
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th>Data</th>
              <th>Código</th>
              <th class="align-right">Valor da compra</th>
              <th class="align-right">Cashback (R$)</th>
              <th class="align-right">Cashback (%)</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in purchases" :key="item.id">
              <td class="align-center">
                <template v-if="item.status.slug === statusEnabled">
                  <button class="page-dashboard__icon icon" title="Editar">
                    <font-awesome-icon icon="edit" />
                  </button>
                  <button class="page-dashboard__icon icon" title="Excluir">
                    <font-awesome-icon icon="trash-alt" />
                  </button>
                </template>
              </td>
              <td>{{ item.date }}</td>
              <td>
                <router-link
                  :to="{ name: 'dashboard' }"
                  v-if="item.status.slug === statusEnabled"
                  >{{ item.code }}</router-link
                >
                <template v-else>{{ item.code }}</template>
              </td>
              <td class="align-right">{{ item.value }}</td>
              <td class="align-right">{{ item.cashback_value }}</td>
              <td class="align-right">{{ item.cashback_percent }}%</td>
              <td>
                <span
                  class="page-dashboard__tag"
                  :class="`page-dashboard__tag--${item.status.slug}`"
                  >{{ item.status.label }}</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AppLoading from "@/components/AppLoading";
export default {
  name: "Dashboard",
  components: {
    AppLoading
  },
  data() {
    return {
      loading: true,
      statusEnabled: "validation"
    };
  },
  computed: {
    purchases() {
      return this.$store.getters["purchases/getPurchasesList"];
    }
  },
  watch: {
    purchases(data) {
      if (data) this.loading = false;
    }
  }
};
</script>
