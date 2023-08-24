<template>
  <li v-if="isEditing" class="todo">
    <input @keydown.enter="postTodo" ref="inputRef"  @keydown.esc="stopEditing" class="create-input" v-model="editingText"/>
      <TodoControllButton additional-class="todo__controll-button-to-edit_type_absolute" :img-src="saveImage" size="small" v-if="editingText" :on-click="postTodo"></TodoControllButton>
      <TodoControllButton additional-class="todo__controll-button-to-remove_type_absolute" :on-click="stopEditing" :img-src="closeImage"></TodoControllButton>
    </li>
  <li v-else class="todo" :key="todo.index">
    <p class="todo__paragraph"><input @change="changeIndex" class="index" type="text" v-model="index"> <span class="text">{{ todo.text }}</span></p>
    <div class="todo__controll">
      <TodoControllButton :on-click="editTodo" :img-src="editImage"></TodoControllButton>
      <TodoControllButton :on-click="removeTodo" :img-src="removeImage"></TodoControllButton>
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref, onUpdated, type Ref } from 'vue';
import TodoControllButton from './TodoControllButton.vue';
import editImage from '../imgs/icons8-edit-30.png'
import removeImage from "../imgs/icons8-remove-30.png"
import saveImage from "../imgs/icons8-save-30.png"
import closeImage from "../imgs/icons8-close-30.png"
import store from '../store/index';

const props = defineProps<{
  todo: {
    index: number,
    text: string
  }
}>()

const inputRef: Ref<null| HTMLInputElement> = ref(null)
const isEditing = ref(false)
const editingText = ref("")
let index = ref(props.todo.index)

  const stopEditing = () => {
    editingText.value = ""
    isEditing.value = false
  }

  const postTodo = () => {
    if(!editingText.value){
      return
    }
    
    store.commit('editPost', {
      index: props.todo.index,
      text: editingText.value
    })
    stopEditing()
  }

  const removeTodo = () => {
    store.commit('removePost', props.todo.index)
  }

  const editTodo = () => {
    isEditing.value = true;
  }

  const changeIndex = () => {
    store.commit('editIndex', {newIndex: index.value, prevIndex: props.todo.index})
    index = ref(props.todo.index)
  }

  onUpdated(()=>{
  if(inputRef.value){
    inputRef.value.focus()
  }
})
</script>

<style>
  .todo{
    position: relative;
    height: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #81F1EB;
    border: 1px solid black;
    border-radius: 10px;
  }

  .todo__paragraph{
    padding-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px
  }

  .index{
    box-sizing: content-box;
    background: white;
    width: 30px;
    height: 30px;
    font-size: 24px;
    text-align: center;
    border-radius: 5px;
  }

  .text{
    font-size: 24px;
  }

  .todo__controll{
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 10px;
  }
  
  .todo__controll-button-to-remove_type_absolute{
    position: absolute;
    top:5px;
    right: 10px;
  }

  .todo__controll-button-to-edit_type_absolute{
    position: absolute;
    bottom:5px;
    right: 10px;
  }
</style>
