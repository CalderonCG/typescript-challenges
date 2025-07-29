export type TupleToObject<T extends readonly any[]> = {
    [K in keyof T as K] : T[K]
}


const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

const typeAux = keyof T

const result: TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}