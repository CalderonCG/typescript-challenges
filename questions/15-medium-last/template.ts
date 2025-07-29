
//Verifies if there's only one element in the array
//If there are more than 1 then pops the first element a recursively calls itself with the rest of the array
export type Last<T extends any[]> = T extends [infer Only] ? Only : T extends [infer First, ...infer Rest] ? Last<Rest> : never 


type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]

type tail1 = Last<arr1> // expected to be 'c'
type tail2 = Last<arr2> // expected to be 1