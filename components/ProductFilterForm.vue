<template lang="pug">
form(@change.prevent="handleSubmit").form 
    <CustomeSelect :items="categories" v-model="category" class="form__select" />
</template>

<script>
export default {
    data() {
        return {
            category: '',
        };
    },
    computed: {
        categories() {
            return [
                { value: '', label: 'categories', selected: true },
                `men's clothing`,
                'jewelery',
                'electronics',
                `women's clothing`,
            ];
        },
    },
    methods: {
        handleSubmit() {
            this.$emit('change', {
                category: this.category,
            });
        },
    },
};
</script>