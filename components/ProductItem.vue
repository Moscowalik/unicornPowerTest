<template lang="pug">
.product-card
    a(href='#' @click.prevent='openProduct(id)').products__link
        img(v-bind:src='imgSrc')
        h3.product-card__title {{title}}
    p(v-show='toggle').product-card__text {{ description }}
    span.product-card-price Price: {{ price }}
    button(type='button' @click.prevent='toggle = !toggle').product-card-btn {{!toggle ? 'Show more' : "Hide"}}
</template>

<script>
export default {
    data() {
        return {
            toggle: false
        }
    },
    props: {
        id: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            default: '',
        },
        title: {
            type: String,
            default: '',
        },
        price: {
            type: Number,
            required: true,
        },
        imgSrc: {
            type: String,
            default: '',
        },
    },
    methods: {
        toggleDescription(value) {
            return {
                toggle: value
            }

        },
        openProduct(id) {
            this.$router.push('/products/' + id)
        },
    },
    watch: {
        open(newValue, oldValue) {
            this.toggleDescription(newValue)
        }
    }
}

</script>
