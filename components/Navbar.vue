<template lang="pug">
nav.navigation
    ul.navigation__list 
        li.navigation__item 
            nuxt-link(exact no-prefetch active-class="active" to="/").navigation__link Home
        li.navigation__item 
            nuxt-link(active-class="active" to="/about").navigation__link About us
        li.navigation__item 
            nuxt-link(active-class="active" to="/products").navigation__link Products
</template>

<script>

</script>
