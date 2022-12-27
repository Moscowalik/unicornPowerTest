export const state = () => ({
  products: null,
});

export const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
};

export const getters = {
  getProducts(store) {
    return store.products;
  },
};

export const actions = {
  async fetchProducts({ commit }) {
    const products = await this.$axios.$get(
      "https://fakestoreapi.com/products"
    );
    commit("setProducts", products);
  },
};
