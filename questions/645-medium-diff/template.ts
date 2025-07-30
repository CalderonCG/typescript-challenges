export type Diff<O, O1> = {
    [k in keyof O as k extends in keyof O1 ? :]
}

type cases = [Expect<Equal<Diff<Foo, Bar>, { gender: number }>>]