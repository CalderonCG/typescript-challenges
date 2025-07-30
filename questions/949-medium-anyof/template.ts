//Destructure the array into the first element and the rest 
export type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest] ? 
//If the first element is a falsy value then it recursively calls anyof with the rest
//Record<PropertyKey, never> is used for empty object
First extends  false | 0 | [] |""| Record<PropertyKey, never> ?
 AnyOf<Rest> : 
 true : //If any value is truthy it returns true and stops the iterations
false

type Sample1 = AnyOf<[1, "", false, [], {}]>; // expected to be true.
type Sample2 = AnyOf<[0, "", false, [], {}]>; // expected to be false