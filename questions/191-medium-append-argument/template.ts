export type AppendArgument<Fn, A> = Fn extends (infer args) => any ? (args: any, x: A) => any: ''

type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean>
// expected be (a: number, b: string, x: boolean) => number