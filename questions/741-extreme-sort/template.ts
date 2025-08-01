


//This type builds a tuple of 0 with the length of the passed number
type numberToTuple<U extends number, T extends unknown[] = []> =
  T['length'] extends U ? T : numberToTuple<U, [0, ...T]>;

//This type returns true if T contains the U which is the lower value
type isHigher<T extends number, U extends number> =
  numberToTuple<U> extends [...numberToTuple<T>, ...infer Rest] ? false : true;
//This turns both numbers into a tuple
//checks if U contains the tuple T inside, meaning T is lower than U, returning false

//Bubble sort, just moves the higher number to the end, but needs more than 1 iteration
type BubbleSort<T extends number[]>= 
//Destructures into an array of numbers with the first 2 separates elements and then the rest
T extends [infer First extends number, infer Second extends number, ...infer Rest extends number[]] ?
//Compares the 2 separates elements and sorts them depending on if the fitst is higher
 isHigher<Second, First> extends false? [Second,...Sort<[First, ...Rest]>]:[First, ...Sort<[Second, ...Rest]>]  : T

// Check if sorted
type IsSorted<T extends number[]> =
//Destructures into an array of numbers with the first 2 separates elements and then the rest
  T extends [infer A extends number, infer B extends number, ...infer Rest extends number[]]
  //If at some point an element is missplaced returns false
    ? isHigher<A, B> extends true
      ? false
      : IsSorted<[B, ...Rest]>
    : true;

// Recursively apply bubble sort until sorted
export type Sort<T extends number[]> =
//If is sorted returns false then iterates with bubble sort again
  IsSorted<T> extends true ? T : Sort<BubbleSort<T>>;

type Sorted = Sort<[3,2,1,7,5,4,5]>

type Max<T extends unknown[], U extends unknown[]> = T['length'] extends U ? true : false

type mayor = numberToTuple<5>
type menor = numberToTuple<3>
type hoySi = isHigher<3, 0>
type max1 = Max<[3, 2, 1, 0], [4,3, 2, 1, 0]>