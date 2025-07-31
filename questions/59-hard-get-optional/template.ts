//Exactly the same logic of get required, but switching the return cases
//This case if one is required then the comparison succeeds and returns never, removing that key
export type GetOptional<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
}
