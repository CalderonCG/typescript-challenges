export type UnionToIntersection<T, U = T> =
  [T] extends [never]  //Base case for when the type runs out of elements
    ? T
    : U extends T //If U = the T in this iteration
      ? U & UnionToIntersection<T> //It adds itself and then calls permutation without that value
      : never;



type I = UnionToIntersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true