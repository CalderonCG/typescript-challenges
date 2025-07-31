// export type CapitalizeWords<S extends string> = S extends `${infer First}${` `|`,`|`.`}${infer Rest}`?
//  `${Capitalize<First>} ${CapitalizeWords<Rest>}`:Capitalize<S>

//K works as a flag to check what action to process
//If the first read character is a blank space then that k flag is set to true, meaning the next first read char will be uppercased
//If the first read character is a normal char then k is set to false, meaning the next first character wont be uppercased
//This way the uppercase only happens after ` `|`,`|`.`
export type CapitalizeWords<S extends string, K extends boolean = true>=
S extends `${infer First}${infer Rest}` ?
First extends ` `|`,`|`.` ? `${First}${CapitalizeWords<Rest, true>}`:
 K extends true?  `${Uppercase<First>}${CapitalizeWords<Rest, false>}`:`${First}${CapitalizeWords<Rest, false>}`:''

type capitalized = CapitalizeWords<'hello world, my friends'> // expected to be 'Hello World, My Friends'