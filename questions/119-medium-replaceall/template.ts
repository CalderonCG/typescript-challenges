export type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> =From extends ''? S : //Checks if from is an empty string, if so then returns S
S extends `${infer text}${From}${infer rest}` ? //Restructures S to extract the From
`${text}${To}${ReplaceAll<rest, From, To>}` //Replaces From with To and recursively calls itself with the rest of the string
: S 