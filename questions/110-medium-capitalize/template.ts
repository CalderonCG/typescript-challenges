export type Capitalize<S extends string> = S extends `${infer First}${infer Last}` ? `${Uppercase<First>}${Last}` : ''


type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'