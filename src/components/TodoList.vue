<template>
  <ul class="todo-list">
    <Todo v-for="todo in store.state.todos" :todo="todo"></Todo>
  </ul>
</template>

<script setup lang="ts">
  import Todo from './Todo.vue'
  import store from '../store/index'
</script>

<style>
  .todo-list{
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 10px;
  }
</style>
