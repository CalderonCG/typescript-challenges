export type _FilterOut<T extends any[], F> = T extends [infer First, ...infer Rest] ? 
First extends F? [_FilterOut<Rest,F>] : [First, _FilterOut<Rest,F>] : T

export type FilterOut<T extends any[], F>= Flatten<_FilterOut<T, F>>

export type Flatten<T extends any[]> = 
  T extends [infer First, ...infer Rest] //Destructures into first element and the rest
    ? First extends unknown[] //If first element is an array, recursively calls itself again
      ? [...Flatten<First>, ...Flatten<Rest>]
      : [First, ...Flatten<Rest>] //Else it calls itself with the rest
    : []

type Filtered = Flatten<FilterOut<[1, 2, null, 3, null], null>> // [1, 2, 3]