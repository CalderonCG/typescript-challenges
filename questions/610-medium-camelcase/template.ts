// export type CamelCase<S> = S extends `${infer Head}${infer Dash}${infer Tail}` ?
// Dash extends `-` ? 
// Tail extends `${infer First}${infer Rest}` ? `${Head}${Uppercase<First>}${Rest}`:'':CamelCase<`${Head}${CamelCase<`${Dash}${Tail}`>}`>:''


// export type CamelCase<S> = S extends `${infer Head}${infer Dash}${infer Tail}` ?  //Destructure the string into the first two chars and the rest
// //Checks if Dash is -, then checks if there are more - after it or if there is a normal string
// Dash extends `-` ? Tail extends `${infer First}${infer Rest}` ? First extends `-`?  `${Head}${Dash}${CamelCase<`${Rest}`>}`:
//  `${Head}${CamelCase<`${Uppercase<First>}${Rest}`>}`:
// Uppercase<S>
// :`${Head}${CamelCase<`${Dash}${Tail}`>}`:S
//Logic got too complex, let's refactor

//Extends checks explicitly for the - now
export type CamelCase<S>= S extends `${infer First}-${infer Dash}${infer Rest}`
    ? Dash extends '-' //Checks if after the first - there is another -
      ? `${First}-${CamelCase<`-${Rest}`>}` //If there is then it doesnt remove the first -
      //Checks if Dash is lower or uppercase, if it is uppercase then adds the - back
      //If it is lowercase then proceeds with the camelcase iteration 
      : `${First}${Dash extends Lowercase<Dash> ? Uppercase<Dash> : `-${Dash}`}${CamelCase<Rest>}`
    : S;


type camel = CamelCase<'foo-Bar-Baz'>