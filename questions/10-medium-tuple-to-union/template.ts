//Destructures the array and adds the first element into the union, then recursively calls itself with the rest of the array
export type TupleToUnion<T> = T extends [infer First, ...infer Rest] ? First | TupleToUnion<Rest> : never

type Arr = ['1', '2', '3']

type a= TupleToUnion<Arr> // expected to be '1' | '2' | '3'