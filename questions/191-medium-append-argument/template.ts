//Destructures into parameters and return to keep that type
export type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer X ?
//Destructures the parameters and adds the parameter x
 (...args: [...Args,  x:A]) => X : ''

type Fn = (a: number, b: string) => number

type Result = AppendArgument<Fn, boolean>
// expected be (a: number, b: string, x: boolean) => number