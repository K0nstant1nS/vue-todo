import { type ITodo } from "@/types"

export const sortArr = (arr: Array<ITodo>) => {
  return arr.map((item, index) => {
    return {
      ...item,
      index: index + 1
    }
  })
}

export const swapToTop = (arr: Array<ITodo>, startIndex: number, finishIndex:number) => {
    return arr.map((item, index)=>{
      if(index >= startIndex - 1 && index < finishIndex - 1){
        return {text: arr[index + 1].text, index: index + 1}
      }
      if(index === finishIndex - 1){
        return {text: arr[startIndex - 1].text, index: finishIndex}
      }
      return item
    })
}

export const swapToBottom = (arr: Array<ITodo>, startIndex: number, finishIndex:number) => {
  return arr.map((item, index)=>{
    if(index <= startIndex - 1 && index > finishIndex - 1){
      return {text: arr[index - 1].text, index: index + 1}
    }
    if(index === finishIndex - 1){
      return {text: arr[startIndex - 1].text, index: finishIndex}
    }
    return item
  })
}
