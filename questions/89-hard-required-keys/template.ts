//Compares each key to the same type with all the required keys
//This case if one isnt required the comparison fails, and returns never, removing that key
//And gets the keys of the resulting object
export type RequiredKeys<T> = keyof {
    [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
}

//Use the type to get 
export type GetRequired<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
}

type Result = RequiredKeys<{ foo: number; bar?: string }>
// expected to be “foo”