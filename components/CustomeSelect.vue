<template lang="pug">
select(v-on="listeners").custom-select
    option(v-for="item in formatedItems" :key="item.value" :value="item.value" :selected="item.selected") {{item.label}}
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: event => this.$emit('input', event.target.value)
            }
        },
        formatedItems() {
            return this.items.map(item => {
                return typeof item === 'object'
                    ? item
                    : { value: item, label: item }
            })
        }
    }
}
</script>