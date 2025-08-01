
//Same logic as the medium one, we neede to transform into a tuple first
type StringToTuple<
  S extends string,
  Acc extends unknown[] = []//Stores the array, accumulating it to reduce recursions
> = S extends `${infer _First}${infer Rest}` 
  ? StringToTuple<Rest, [unknown, ...Acc]> //Uses that accumulator for the recursions
  : Acc; 

  
//With the string as a tuple it can use the lenght tuple value 
export type LengthOfString<S extends string> = StringToTuple<S>["length"];




type split<T extends unknown[]>= T extends [infer First, ...infer Last] ? T[2] : []

type a= split<[1,2,3,4]>