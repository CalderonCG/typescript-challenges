//Checks if U contains a type with T as the value, if doesnt then deletes that object with never
export type LookUp<U, T> = U extends {type: T} ? U : never


interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type MyDogType = LookUp<Dog|Cat, 'dog'> // expected to be `Dog`