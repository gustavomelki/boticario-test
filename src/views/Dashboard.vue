<template>
  <div class="page-dashboard">
    <h1>Suas Compras</h1>
    <p>Confira seu extrato de compras e a situação de cada uma</p>
    <div class="card card--white">
      <table cellpadding="0" cellspacing="0" class="table-default">
        <thead>
          <tr>
            <th>Data</th>
            <th>Código</th>
            <th>Valor</th>
            <th>Cashback (%)</th>
            <th>Cashback (R$)</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>28/11/2019</td>
            <td>2019450973</td>
            <td>R$ 3.000,00</td>
            <td>10%</td>
            <td>R$ 300,00</td>
            <td><span>Em validação</span></td>
            <td>
              <button title="Editar">Editar</button>
              <button title="Excluir">Excluir</button>
            </td>
          </tr>
          <tr>
            <td>28/11/2019</td>
            <td>2019450973</td>
            <td>R$ 3.000,00</td>
            <td>10%</td>
            <td>R$ 300,00</td>
            <td><span>Reprovado</span></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>28/11/2019</td>
            <td>2019450973</td>
            <td>R$ 3.000,00</td>
            <td>10%</td>
            <td>R$ 300,00</td>
            <td><span>Aprovado</span></td>
            <td>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
