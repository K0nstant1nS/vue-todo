import type { IIndexesToSwap, ITodo } from "@/types"
import { sortArr } from "@/utils"

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
  editIndex(state: any, newIndex: number){
    if(newIndex >= state.todos.length){
      return
    }
    const post = state[newIndex];
    const postOnSwap = state[post.index];
    state.todos = state.todos.map((item: ITodo, index: number) => {
      if(index === post.index){
        return {...postOnSwap, index: post.index}
      }
      if(index === newIndex){
        return {...post, index: newIndex}
      }
      return item
    })
  }
}

export default mutations
