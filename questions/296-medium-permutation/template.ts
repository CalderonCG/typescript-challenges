// export type Permutation<T> = [T] extends [infer First, ...infer Rest] ? [First, Permutation<Rest>] : ''

// export type Permutation<T extends string> = objectToTuple<UnionToObject<T>>

// type UnionToObject<T extends string> = {readonly [k in T]: k} 
// type objectToTuple<T>=  (typeof keyof T)[]

// type newOb= UnionToObject<'A' | 'B' | 'C'>


//U works just as a comparison variable
export type Permutation<T, U = T> =
  [T] extends [never]  
    ? [] 
    : U extends T //If U = the T in this iteration
      ? [U, ...Permutation<Exclude<T, U>>] //It adds itself and then calls permutation without that value
      : never;

type perm = Permutation<'A' | 'B' | 'C'> // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']