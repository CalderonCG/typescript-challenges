import { First } from "../14-easy-first/template"


//Recursive generic 
type _TupleToObject<T extends readonly any[]> = 
    T extends readonly [infer First, ...infer Rest] ? First extends string | number | symbol ? { 
        [k in First] : k //Takes the first element of the array and adds it to the object
    } & TupleToObject<Rest> //Resursively calls the rest of the elements
    : {} : {}

//TS doesnt merge the intersections in the type, so the test fail
//This type merges the types into a single one
type Simplify<T> = { [K in keyof T]: T[K] }

//Final exported type with the merging
export type TupleToObject<T extends readonly any[]>= Simplify<_TupleToObject<T>>


const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const