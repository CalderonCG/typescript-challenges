
//Verifies if T is a function or not an object, if that's true then it returns the same T
//If T is an object then it recursively calls itself on each element of the object while making that element readonly
export type DeepReadonly<T> = T extends (...args: any[]) => any
  ? T
  : T extends object
    ? {
        readonly [K in keyof T]: DeepReadonly<T[K]>
      }
    : T;



type X = {
  x: {
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = {
  readonly x: {
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey'
}

type todo= DeepReadonly<X> // should be same as `Expected`

