var a = '1';
console.log("mmmm", a);
//1. Assigning variable type
var hello = "world";
var x = 3;
var y = 2.4;
//can not change the type by assigning a value of another type
//hello=true; //this is type error, type script will raise an error
//Type 'boolean' is not assignable to type 'string'
//To specify the type directly
var my_name = "Nora";
//my_name=9;//Type 'number' is not assignable to type 'string'
//================================================================
//Functions
var getFullName = function (name, surname) {
    return name + " " + surname;
};
//console.log(getFullName(true,[2,3,4]));// error TS2345: Argument of type 'boolean' is not assignable to parameter of type 'string'.
// the function takes two string arguments and should return a string
console.log(getFullName("Nora", "Mohamed"));
//================================================================
//Introduction to Interfaces
