//Compares each key to the same type with all the required keys
//This case if one is required the comparison succeeds, and returns never, removing that key
//And gets the keys of the resulting object
export type OptionalKeys<T> = keyof {
    [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K]
}