export type Awaited<T> = T extends Promise<infer X> ? X : T 

type a = Promise<boolean>
type b = Awaited<a>