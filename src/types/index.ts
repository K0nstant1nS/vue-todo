export interface IState {
  todos: Array<ITodo>
}

export interface ITodo {
  index: number,
  text: string
}

export interface IIndexesToSwap{
  prevIndex: number,
  newIndex: number
}
