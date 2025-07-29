
export type TrimLeft<S extends string> = S extends `${infer Left}${infer Text}` ? //Splits the string into first character and rest
Left extends ' '|'\n'|'\t'? //Checks if first character matches blank space
TrimLeft<Text> : //If it does, recursively calls trim without the first character
`${Left}${Text}` ://If it doesnt, returns the text with the first character
never

type blank<T>= T extends ''? true:false

type a= blank<'a'>

type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '