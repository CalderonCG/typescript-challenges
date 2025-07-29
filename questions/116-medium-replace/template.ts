export type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''? S : //Checks if from is an empty string, if so then returns S
S extends `${infer text}${From}${infer rest}` ? //Restructures S to extract the From
`${text}${To}${rest}` : S //Replaces From with To


type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'