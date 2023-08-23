import { type ITodo } from "@/types"

export const sortArr = (arr: Array<ITodo>) => {
  return arr.map((item, index) => {
    return {
      ...item,
      index: index + 1
    }
  })
}
