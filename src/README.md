# Typescript Basics

## 1. Variables

In typescript you have to define the type of every variable you declare or what is the difference between it and javascript.
> Remember, typescript add features to javascript to detect the errors related to data types early and then run correctly.
For example, declare a varible my_name which is a string.

```
let my_name:string="Nora";
```
this variable can not accept any other type from now and then, try to change its value to a number.

```
 let my_name:string=1;

```

It will raise an error,

```
<span style="color: red">error</span> TS2322: Type 'number' is not assignable to type 'string'.

13  let my_name:string=1;
```
