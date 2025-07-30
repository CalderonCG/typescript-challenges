export type Merge<F, S> = {
    //Remove the K of F that appear in S, and take the remaining keys + the S keys
    [K in keyof (Omit<F, keyof S> & S)]: (Omit<F, keyof S> & S)[K]
}

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
}

type merged = Merge<Foo, Bar>