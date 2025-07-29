export type Trim<S extends string> = S extends `${infer Left}${infer Text}` ? //Splits the string into first character and rest
 Left extends ' '|'\n'|'\t'? //Checks if first character matches blank space
 Trim<Text> ://If it does, recursively calls trim without the first character
 Text extends `${infer Rest}${' '|'\n'|'\t'}`?  //If it doesnt, checks if the last character matches blank space
 Trim<`${Left}${Rest}`> : //If it does, recursively calls trim without the last character
 `${Left}${Text}` :  //If it doesnt then returns the complete text
 never



 type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'