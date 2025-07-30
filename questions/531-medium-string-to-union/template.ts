//Destructure the string into the first character and the rest
//Then recursively call StringToUnion with the rest
export type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}`? First | StringToUnion<Rest> : never

type Test = '123'
type Result = StringToUnion<Test> // expected to be "1" | "2" | "3"