//If T is assignable to U then it returns never, deleting it
export type MyExclude<T, U> = T extends U ? never : T
