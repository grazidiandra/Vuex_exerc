import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    produtos: [],
    quantidade: 1,
    preco: 20.00

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
    },
    setQuantidade(state, quantidade) {
      return state.quantidade = quantidade;
    },
    setPreco(state, preco) {
      return state.preco = preco;
    },
  },
  actions: {
    adicionarProdutos({ commit }, produto) {
      setTimeout(() => {
        commit('adicionarProdutos', produto)
      }, 1000)
    }
  }
});