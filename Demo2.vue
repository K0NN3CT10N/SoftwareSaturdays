<template>
    <div>
        <h2>{{msg}}</h2>
        <p>{{initial}}</p>

        <input v-model="initial">
        <br><br>
        <button v-on:click="countUp">This is a counter clicked {{count}} times</button>
    </div>
</template>

<script>
export default {
    name:'Demo2',
    props: {
        msg: String,
    },
    data() {
        return {
            initial: '',
            count: 0
        }
    },
    methods: {
        countUp() {
            this.count += 1;
        }
    }
}
</script>

<style scoped>
h2 {
    font-weight: bold;
}
input {
    padding: 10px;
}
</style>