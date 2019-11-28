<template>
  <div class="page-dashboard">
    <header>
      <div class="container">
        <img
          src="@/assets/images/icone-grupo.png"
          alt="Ícone Grupo Boticário"
        />
        <nav>
          <ul>
            <li>
              <router-link :to="{ name: 'dashboard' }" title="Suas Compras"
                >Suas Compras</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'register' }" title="Cadastrar Compra"
                >Cadastrar Compra</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'profile' }" title="Editar Perfil"
                >Editar Perfil</router-link
              >
            </li>
          </ul>
        </nav>
        <div>
          <span>Cashback acumulado</span>
          <span>R$ 900,00</span>
        </div>
        <div>
          <div>
            <span>Olá, Gustavo</span>
            <button title="Sair">Sair</button>
          </div>
          <div />
        </div>
      </div>
    </header>
    <main class="container">
      <h1>Suas Compras</h1>
      <p>Confira seu extrato de compras e a situação de cada uma</p>
      <div>
        <table cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <th>Data</th>
              <th>Código</th>
              <th>Valor</th>
              <th>% Cashback</th>
              <th>Valor Cashback</th>
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
    </main>
    <footer>
      <span>© 2019 Grupo Boticário · Todos os direitos reservados</span>
    </footer>
  </div>
</template>
