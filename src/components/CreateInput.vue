<template>
  <div class="content">
    <input type="text" v-model="text">
    <TodoControllButton additional-class="todo__controll-button-to-create_type_absolute" :img-src="saveImage" size="big" :on-click="submit" v-if="text.length > 0"></TodoControllButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
  import store from '../store/index';
  import TodoControllButton from './TodoControllButton.vue';
  import saveImage from "../imgs/icons8-save-30.png";
  let text = ref("")
  const submit = () => {
    store.commit('addPost', text.value)
    text.value = ""
  }
</script>


<style>

  .content{
    position: relative;
    width: 80%;
    height: 50px;
  }

  input{
    height: 100%;
    font-size: 24px;
    padding-left: 10px;
    width: 100%;
    border-radius: 10px;
  }

  .todo__controll-button-to-create_type_absolute{
    position: absolute;
    right: 10px;
    top: 20px;
  }


</style>
