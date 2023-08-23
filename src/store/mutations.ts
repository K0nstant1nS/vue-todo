import type { IIndexesToSwap, ITodo } from "@/types"
import { sortArr, swapToBottom, swapToTop } from "@/utils"

const mutations = {
  addPost(state, text){
    const post = {
      text,
      index: state.todos[state.todos.length - 1].index + 1
    }
    state.todos.push(post)
  },
  removePost(state, index){
    const filtered = state.todos.filter((item: any) => {
      return item.index !== index
    })
    state.todos = sortArr(filtered)
  },
  editPost(state, post){
    state.todos = state.todos.map((item: any) => {
      if(item.index === post.index){
        return post
      }
      return item
    })
  },
  /*editIndex(state: any, indexes: IIndexesToSwap){  // Версия для обмена местами
    const { prevIndex, newIndex } = indexes;
    if(newIndex > state.todos.length){
      return
    }
    console.log('swap')
    const post = state.todos[newIndex-1];
    const postOnSwap = state.todos[prevIndex-1];
    state.todos = state.todos.map((item: ITodo, index: number) => {
      if(index === newIndex - 1){
        return {...postOnSwap, index: newIndex}
      }
      if(index === prevIndex - 1){
        return {...post, index: prevIndex}
      }
      return item
    })
    console.log(state.todos)
  }*/
  editIndex(state: any, indexes: IIndexesToSwap){  // Версия смещения
    if(indexes.newIndex > state.todos.length){
      return
    }
    const min = Math.min(indexes.newIndex, indexes.prevIndex)
    const max = Math.max(indexes.newIndex, indexes.prevIndex)
    console.log(indexes.newIndex, max)
    if(indexes.newIndex == max){
      console.log(2)
      state.todos = swapToTop(state.todos, min, max)
    }
    if(indexes.prevIndex == max){
      console.log(3)
      state.todos = swapToBottom(state.todos, indexes.prevIndex, indexes.newIndex)
    }
  }
}

export default mutations
