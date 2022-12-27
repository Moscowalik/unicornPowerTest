<template lang="pug">
section.section
    img(v-bind:src='product.image').product-page__img
    h1.title  {{product.title}} 
    p.text {{ product.description }}

</template>

<script>
export default {
    async asyncData({ params, $axios }) {
        const product = await $axios.$get('https://fakestoreapi.com/products/' + params.product)
        return { product }
    }
}
</script>