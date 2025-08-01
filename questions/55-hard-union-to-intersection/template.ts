export type UnionToIntersection<T> =
  UnionToFunction<T> extends (a: infer T) => unknown   ?
  T: never

   type UnionToFunction<T>= T extends T?
   (a: T) => unknown : never



type I = UnionToIntersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true