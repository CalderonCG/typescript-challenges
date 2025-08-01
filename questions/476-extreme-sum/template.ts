export type Sum<
  A extends string | number | bigint,
  B extends string | number | bigint
> = string

//This type builds a tuple of 0 with the length of the passed number
type numberToTuple<U extends number, T extends unknown[] = []> =
  T['length'] extends U ? T : numberToTuple<U, [0, ...T]>; 

type a5 = numberToTuple<3>

type T0 = Sum<2, 3> // '5' 
type T1 = Sum<'13', '21'> // '34'
type T2 = Sum<'328', 7> // '335'
type T3 = Sum<1_000_000_000_000n, '123'> // '1000000000123'