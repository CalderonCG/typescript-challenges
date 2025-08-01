
//Picks and makes readonly all the keys that apply, and omits them from the original object, then makes an intersection
//If K is undefined then everything is set to readonly
//Whe use [K] to avoid distribution of the union of types
export type MyReadonly2<T, K = undefined> =   [K] extends [keyof T]
    ? readonlyEverything<Pick<T, K>> & Omit<T, K>
    : { readonly [key in keyof T]: T[key] };


//Sets all keys to readonly
type readonlyEverything<T> = {
    readonly [k in keyof T] : T[k]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
  title: 'Hey',
  description: 'foobar',
  completed: false,
}


todo.completed = true // OK 
//@ts-expect-error Error: cannot reassign a readonly property (Working properly)
todo.title = 'Hello' 
//@ts-expect-error Error: cannot reassign a readonly property (Working properly)
todo.description = 'barFoo' 