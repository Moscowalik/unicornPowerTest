<template lang="pug">
section.section
    h1.title Products page
    <ProductFilterForm @change="filter"/>
    ul.products__list
        li(v-for="product of filteredCategories", :key="product.id").products__item
            <ProductItem :id="product.id" :description="product.description" :title="product.title" :price="product.price" :imgSrc="product.image"/>

</template>

<script>
export default {
    async fetch({ store }) {
        await store.dispatch("products/fetchProducts");

    },
    computed: {
        products() {
            return this.$store.getters["products/getProducts"];
        },
        filteredCategories() {
            return this.filterByCategory(this.products);
        },
    },
    data() {
        return {
            toggle: false,
            filters: {
                category: '',
            },
        }
    },
    methods: {
        filter(category) {
            this.filters.category = category;
        },
        filterByCategory(products) {
            if (!this.filters.category.category || this.filters.category.category === 'categories') return products;

            return products.filter((product) => {
                return product.category === this.filters.category.category;
            });
        },
    },

}
</script>