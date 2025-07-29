export type MyReadonly<T> = {
    readonly [K in keyof T] : T[K]
}
interface Todo1 {
  title: string
  description: string
  completed: boolean
}
