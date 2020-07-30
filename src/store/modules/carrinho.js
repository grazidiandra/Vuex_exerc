export default({
  state: {
    produtos: [],
  },
  getters: {
    valorTotal(state) {
      return state.produtos.map(p => p.quantidade * p.preco)
        .reduce((total, atual) => total + atual, 0)
    }
  },
  mutations: {
    adicionarProdutos(state, produto) {
      return state.produtos.push(produto);
    }
  },
  actions: {
    adicionarProdutos({ commit }, produto) {
      setTimeout(() => {
        commit('adicionarProdutos', produto)
      }, 500)
    }
  }
})