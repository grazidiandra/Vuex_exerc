export default({
  state: {
    quantidade: 0,
    preco: 0.
  },
  mutations: {

    setQuantidade(state, quantidade) {
      return state.quantidade = quantidade;
    },
    setPreco(state, preco) {
      return state.preco = preco;
    },
  }
})