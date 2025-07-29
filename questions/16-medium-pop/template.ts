//Pop
//Destructures the array into the rest of the elements and the last one, then returns the rest
export type Pop<T extends any[]> = T extends [...infer Rest, infer Last] ? Rest : never

//Shift
//Destructures the array into the first element and the rest, then returns the rest
export type Shift<T extends any[]> = T extends [infer First,...infer Rest] ? Rest : never

//Push
//Destructures the array into rest and then adds U after rest
export type Push<T extends any[], U> = T extends [...infer Rest] ? [...Rest, U] : never


//Unshift
//Destructures the array into rest and then adds U before the rest
export type Unshift<T extends any[], U> = T extends [...infer Rest] ? [U,...Rest] : never

type arr1 = ['a', 'b', 'c', 'd']
type arr2 = [3, 2, 1]


type rePop = Pop<arr2> // expected to be [3, 2]
type reShift = Shift<arr2> // expected to be [2, 1]
type rePush = Push<arr1, 'x'> // expected to be ['a', 'b', 'c', 'x']
type reUnshift = Unshift<arr1, 'x'> // expected to be ['x','a', 'b', 'c']
