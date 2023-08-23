<template>
  <div class="main">
    <CreateInput></CreateInput>
    <TodoList></TodoList>
  </div>
</template>

<script setup lang="ts">
  import CreateInput from "../components/CreateInput.vue"
  import TodoList from "../components/TodoList.vue"
</script>

<style>
.main{
  width: 100%;
  max-width: 1920px;
  height: 100%;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
</style>
