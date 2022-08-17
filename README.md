# Learn Typescript from freecodecamp course <img  width='30px' src='https://github.com/edent/SuperTinyIcons/blob/master/images/svg/typescript.svg' alt='typescript'/>

## What is typescript?

It is an extenstion for javascript and not a new programming language.
It is used to be a static typechecker for JavaScript programs where type errors may occurres.

## Installing typescript

To install typescript globally in your machine type in the following command in the console.

```
> npm install -g typescript
```

To check for it is installed correctly, type in the following command to see its version

```
> tsc -v

```
## Transpiling TS files into JS
We need to convert ts files into js inorder to be seen by the browser.
This process is called transpiling.
```
>tsc main.ts

```

## Watching the changes in the main.ts file

```
> tsc main.ts -w

```

## Creating config json file

Create a json file and name it 'tsconfig' so that typescript can now know that its configrations are in that file
Create folder 'src' for the source files (ex. html, main.ts)
and type the following command for running 'main.ts' and watching it

```

> tsc -w

```
