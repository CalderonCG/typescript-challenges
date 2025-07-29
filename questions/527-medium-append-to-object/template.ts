export type AppendToObject<T, U extends string|number|symbol, V> = T & {
    [K in U]: V
}


type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }

