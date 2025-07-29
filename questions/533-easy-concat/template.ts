//Infers all the elements of both arrays and then returns them together
export type Concat<T, U> = T extends [...infer RestT] ? U extends [...infer RestU] ? [...RestT, ...RestU] : [] : []
