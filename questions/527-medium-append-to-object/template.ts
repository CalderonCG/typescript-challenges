export type AppendToObject<T, U extends string|number|symbol, V> =  {
//K takes the values of all the keys in T and the value of U
//If the K was in T then returns that element
//Else it adds the V value
  [K in keyof T | U]: K extends keyof T ? T[K] : V
}


type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

