<template>
  <div class="page-dashboard">
    <h1>Suas Compras</h1>
    <p>Confira seu extrato de compras e a situação de cada uma</p>
    <div class="card card--white">
      <table cellpadding="0" cellspacing="0" class="table-default">
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
          <tr>
            <td class="align-center">
              <button class="page-dashboard__icon icon" title="Editar">
                <font-awesome-icon icon="edit" />
              </button>
              <button class="page-dashboard__icon icon" title="Excluir">
                <font-awesome-icon icon="trash-alt" />
              </button>
            </td>
            <td>28/11/2019</td>
            <td>
              <router-link :to="{ name: 'purchases-edit' }"
                >2019450973</router-link
              >
            </td>
            <td class="align-right">R$ 3.000,00</td>
            <td class="align-right">R$ 300,00</td>
            <td class="align-right">10%</td>
            <td>
              <span class="page-dashboard__tag page-dashboard__tag--validation"
                >Em validação</span
              >
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>28/11/2019</td>
            <td>2019450973</td>
            <td class="align-right">R$ 3.000,00</td>
            <td class="align-right">R$ 300,00</td>
            <td class="align-right">10%</td>
            <td>
              <span class="page-dashboard__tag page-dashboard__tag--disapproved"
                >Reprovado</span
              >
            </td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td>28/11/2019</td>
            <td>2019450973</td>
            <td class="align-right">R$ 3.000,00</td>
            <td class="align-right">R$ 300,00</td>
            <td class="align-right">10%</td>
            <td>
              <span class="page-dashboard__tag page-dashboard__tag--approved"
                >Aprovado</span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
