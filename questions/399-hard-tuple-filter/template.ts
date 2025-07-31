// export type FilterOuts<T extends any[], F>= Flatten<_FilterOut<T, F>>

// export type Flatten<T extends any[]> = 
//   T extends [infer First, ...infer Rest] //Destructures into first element and the rest
//     ? First extends unknown[] //If first element is an array, recursively calls itself again
//       ? [...Flatten<First>, ...Flatten<Rest>]
//       : [First, ...Flatten<Rest>] //Else it calls itself with the rest
//     : []

//This one does the same withot needing flatten
export type FilterOut<T extends any[], F> =
  T extends [infer First, ...infer Rest] //Destructures the array
    ? [First] extends [F] //In case F is an union
      ? FilterOut<Rest, F> //Recursively calls itself without the first element
      : [First, ...FilterOut<Rest, F>] //Recursively calls itself while keeping the first element
    : [];



type Filtered = FilterOut<[never], never> // [1, 2, 3]