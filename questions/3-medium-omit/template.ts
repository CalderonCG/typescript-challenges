//Checks if the key extends the parameter, if it does then deletes it with a never type
export type MyOmit<T, K> = {
    [key in keyof T as key extends K ? never : key] : T[key]
}


interface Todo {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
  completed: false,
}