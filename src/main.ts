const a='1';
console.log("mmmm",a);
//1. Assigning variable type
let hello="world";
let x=3;
let y=2.4;
//can not change the type by assigning a value of another type
 //hello=true; //this is type error, type script will raise an error
 //Type 'boolean' is not assignable to type 'string'

 //To specify the type directly

 let my_name:string="Nora";
 //my_name=9;//Type 'number' is not assignable to type 'string'
 //================================================================
 //Functions
 const getFullName=(name:string,surname:string):string=>{
    return name +" "+surname;
 };
 //console.log(getFullName(true,[2,3,4]));// error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string'.
 // the function takes two string arguments and should return a string
 console.log(getFullName("Nora","Mohamed"));
 //================================================================
 //Introduction to Interfaces