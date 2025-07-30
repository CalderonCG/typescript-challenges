export type Flatten<T extends any[]> = 
  T extends [infer First, ...infer Rest] //Destructures into first element and the rest
    ? First extends unknown[] //If first element is an array, recursively calls itself again
      ? [...Flatten<First>, ...Flatten<Rest>]
      : [First, ...Flatten<Rest>] //Else it calls itself with the rest
    : []

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]