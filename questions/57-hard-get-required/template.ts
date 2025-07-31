//Compares each key to the same type with all the required keys
//This case if one isnt required the comparison fails, and returns never, removing that key
export type GetRequired<T> = {
    [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K]
}

type OmitByType<Type, Omited> = {
  //Gets 2 Types
  //If Type === Omited Type then the KEY gets reeplaced to never
  [K in keyof Type as Type[K] extends Omited ? never : K]: Type[K]
}



type I = GetRequired<{ foo: number; bar?: string }> // expected to be { foo: number }