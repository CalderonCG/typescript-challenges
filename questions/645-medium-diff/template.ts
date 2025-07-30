//Compares the keys and if there share it then assigns it never to remove it
export type Diff<O, O1> = {
    [k in keyof O1 as k extends keyof O ? never:k] : O1[k]
}

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type mergeDiff = Diff<Foo,Bar>

type cases = [Expect<Equal<Diff<Foo, Bar>, { gender: number }>>]