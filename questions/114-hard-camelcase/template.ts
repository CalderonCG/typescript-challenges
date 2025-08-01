
export type CamelCase<S extends string> =
//Destructures strings divided by the _
  S extends `${infer First}_${infer Tail}`
  //Then it capitalizes the word after the _, recursively calling itself
    ? `${Lowercase<First>}${Capitalize<CamelCase<Tail>>}`
    : Lowercase<S>;

    
type camelCase1 = CamelCase<'hello_world_with_types'> // expected to be 'helloWorldWithTypes'
type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one