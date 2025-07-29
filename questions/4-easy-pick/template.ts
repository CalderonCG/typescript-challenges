export type MyPick<T, K extends keyof T> = {
    [key in keyof T as key extends K? key: never ]: T[key]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>