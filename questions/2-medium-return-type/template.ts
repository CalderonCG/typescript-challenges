export type MyReturnType<T> = T extends (...args: any) => infer X ? X : false


const fn = (v: boolean) => (v ? 1 : 2)

type a = MyReturnType<typeof fn>