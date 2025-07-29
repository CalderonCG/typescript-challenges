//Infers the first element of the array and compares it to U, if that comparation is false then recursively calls itself with
//the rest of the array
export type Includes<T extends readonly any[], U> = T extends [infer First, ... infer Rest] ? 
First extends U ? true : Includes<Rest, U>
: false
