

//This helper transforms the string into a tuple of the characters
type StringToTuple<S extends string> = S extends `${infer Char}${infer Rest}`
  ? [Char, ...StringToTuple<Rest>]
  : [];

//With the string as a tuple it can use the lenght tuple value 
export type LengthOfString<S extends string> = StringToTuple<S>["length"];



