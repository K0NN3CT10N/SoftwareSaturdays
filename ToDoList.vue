<template>
    <div>
        <p>To Do List</p>
        <ToDoItem v-for="item in todo_list" v-bind:key="item.id" v-bind:todo="item"/>
        <br>
        <input v-model="newTodo"> <button v-on:click="addTodo">Add</button>
    </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem";
export default {
    name: 'ToDoList',
    components: {
        ToDoItem
    },
    data() {
        return {
            todo_list: [
                {
                    id: 0,
                    text: "Text"
                },
                {
                    id: 1,
                    text: "More Text"
                }
            ],
            newTodo: '',
            nextID: 2,
        }
    },
    methods: {
        addTodo() {
            this.todo_list.push({
                id: this.nextID,
                text: this.newTodo
            });
            this.nextID++;
            this.newTodo='';
        }
    },
}
</script>

<style>
</style>