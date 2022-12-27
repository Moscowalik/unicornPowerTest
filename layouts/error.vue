<template lang="pug">
.container
    h1(v-if="error.statusCode === 404").error-message Page not found
    h1(v-else).error-message An error occurred
    NuxtLink(to="/").navigation__link.navigation__link-error Home page
</template>

<script>
export default {
    props: ['error'],
    layout: 'empty' // you can set a custom layout for the error page
}
</script>