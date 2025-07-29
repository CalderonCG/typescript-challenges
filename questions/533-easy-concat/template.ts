export type Concat<T, U> = T extends [...infer RestT] ? U extends [...infer RestU] ? [...RestT, ...RestU] : [] : []
