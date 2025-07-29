export type TupleToUnion<T> = T extends [infer First, ...infer Rest] ? First | TupleToUnion<Rest> : never

type Arr = ['1', '2', '3']

type a= TupleToUnion<Arr> // expected to be '1' | '2' | '3'