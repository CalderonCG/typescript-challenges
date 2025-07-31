//Infered values can be extended to ensure a type
export type ToNumber<S extends string> = S extends `${infer X extends number}`? X :''


type num = ToNumber<'3'>//expected 3