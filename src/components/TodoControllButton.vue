<template>
  <button @click="onClick" :class="['todo__controll-button', additionalClass ? additionalClass : '']" type="button"><img class="todo__controll-img" :src="imgSrc"></button>
</template>

<script setup lang="ts">
defineProps<{
  imgSrc: string,
  onClick: (payload: MouseEvent) => void,
  size?: string,
  additionalClass?: string
}>()
</script>

<style>
  .todo__controll-button{
    background: none;
    border: none;
  }

  .todo__controll-img{
    cursor: pointer;
    height: 20px;
    width: 20px;
    transition: opacity .3s ;
  } 

  .todo__controll-img:hover{
    opacity: .5;
  }
</style>
