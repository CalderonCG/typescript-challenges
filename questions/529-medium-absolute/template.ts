//First parse everything into a string, and destrucure into first character and rest of characters
export type Absolute<T extends number | string | bigint> = `${T}` extends `${infer first}${infer rest}` ? 
first extends `-` ? rest : //if first character is - then return the rest
`${first}${rest}`: T //else return the whole number



//export type Absolute<T extends number | string | bigint> = T extends `${infer minus}${infer rest}`? minus extends `-`? rest :T :T


//export type Absolute<T extends number | string | bigint> = T extends number|bigint|string? deleteSymbol<`${T}`> : T  

//type deleteSymbol<T extends string> = T extends `${infer minus}${infer rest}`? minus extends `-`? rest :T :T

type Test = -100
type Result = Absolute<Test> // expected to be "100"