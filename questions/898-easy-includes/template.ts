export type Includes<T extends readonly any[], U> = T extends [infer First, ... infer Rest] ? 
First extends U ? true : Includes<Rest, U>
: false
