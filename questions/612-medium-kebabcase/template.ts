// export type KebabCase<S> =
//   S extends `${infer First}${infer Rest}` //Destructures into first character and rest
//     ? KebabCase<Rest> extends ''? `${Lowercase<First>}` //If there is only 1 character lowercases the first character
//       : First extends Uppercase<First> //If the first character is uppercase
//         ? `${Lowercase<First>}-${KebabCase<Rest>}` //Lowercases it,adds a - and recursively calls itself
//         : `${First}${KebabCase<Rest>}`
//     : '';
//This one was adding a - after every uppercase char


//At this point I found out about uncapitalize
export type KebabCase<S> =
  S extends `${infer First}${infer Rest}` //Destructures into first and rest
    ? Rest extends Uncapitalize<Rest> //Checks if rest doesnt start with an uppercase
      ? `${Lowercase<First>}${KebabCase<Rest>}` //Always lowercases the first character and then calls itself
      : `${Lowercase<First>}-${KebabCase<Capitalize<Rest>>}` //If rest starts with an uppercase then adds a -
    : S;


type camel = KebabCase<'ABC'>