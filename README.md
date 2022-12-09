# 🏆 JavaScript Beginning to Mastery 🏆

### 1 [console](#console)

### 2 [Declare Variables](#declare-variables)

### 3 [Naming Rules in Variables](#naming-rules-in-variables)

### 4 [use strict](#use-strict)

### 5 [String indexing](#string-indexing)

### 6 [List of Data Types](#list-of-data-types)

### 7 Operators :)

### 8 [=> Arithmetic Operators](#1-arithmetic-operators)

### 9 [=> Assignment Operators](#2-assignment-operators)

## console

```javascript
console.log("Hello world!");
```

## Declare Variables

```javascript
// declare var keyword

var firstName = "shiv";
console.log(firstName);

// declare let keyword

let lastName = "shiv";
lastName = "kumar";
console.log(lastName);

// declare constant keyword

const fullName = "shivkumar";
console.log(fullName);
```

## Naming Rules in Variables

```javascript
// you cannot start with number
// example :-
var value1 = "value1";
console.log(value1);

// you can use only undersore _ or dollar symbol

var first_name = "first_name";
var _firstname = "_firstname";

console.log(first_name);
console.log(first_name);

var first$name = "first$name";
var $firstname = "$firstname";

console.log(first$name);
console.log($firstname);

// you cannot use spaces

var firstname = "shiv"; //lovercase case writing
var firstName = "kumar"; // camel case writing
var FULLNAME = "prajapat"; // uppercase case writing

console.log(firstname);
console.log(firstName);
console.log(FULLNAME);
```

## use strict

```javascript
"use strict"; //show the error message without defined syntax
// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable

var firstName = "Shiv";

// use a variable
console.log(firstName);

// change value

firstName = "Kumar";

console.log(firstName);
```

## String indexing

```javascript
document.write("<h3>String indexing</h3>");

let firstName = "shiv";

// console.log(firstName[0]);
// length of string
// firstName.length

console.log(firstName.length);
console.log(firstName[1]);

console.log(firstName[firstName.length - 2]);
```

## List of Data Types

- (primitive data types)

| ID    | Type        | Description                      |
| :---- | :---------- | :------------------------------- |
| **1** | `Number`    | integers or floating - points    |
| **2** | `String`    | series of one or more characters |
| **3** | `Boolean`   | true or false                    |
| **4** | `Null`      | unknown values                   |
| **5** | `Undefined` | unassigned values                |
| **6** | `Object`    | key : value pairs                |

#### data types Example:

```javascript
document.write("<h3>Data Types</h3>");

//  Number
//  String
//  Boolean
//  Null
//  Undefined
//  Object

let a = 22;
let firstName = "shiv";
let bool = true;
var nul = null;
var unde;
var obj = {
  name: "shiv",
};

console.log("Number =>", typeof a);
console.log("String =>", typeof firstName);
console.log("Boolean =>", typeof bool);
console.log("Null =>", typeof nul);
console.log("Number =>", typeof unde);
console.log("Object =>", typeof obj);

// convert to string format in number format
let myStr = +"34";
console.log("convert to string => ", typeof myStr);

// convert to string format in number format
let age = "18";
age = Number(age);
console.log("Number => ", typeof age);
```

# Operators

## 1. Arithmetic Operators

| ID    | Operator | Description    |
| :---- | :------- | :------------- |
| **1** | `+`      | Addition       |
| **2** | `-`      | Subtraction    |
| **3** | `*`      | Multiplication |
| **4** | `**`     | Exponentiation |
| **5** | `/`      | Division       |
| **6** | `%`      | Modulus        |
| **7** | `++`     | Increment      |
| **8** | `--`     | Decrement      |

## 2. Assignment Operators

| ID    | Operator | Example   | Same As      |
| :---- | :------- | :-------- | ------------ |
| **1** | `=`      | x = y     | x = y        |
| **2** | `+=`     | x += y    | x = x + y    |
| **3** | `-=`     | x -= y    | x = x - y    |
| **4** | `*=`     | x \*= y   | x = x \* y   |
| **5** | `/=`     | x /= y    | x = x / y    |
| **6** | `%+`     | x %= y    | x = x % y    |
| **7** | `**=`    | x \*\*= y | x = x \*\* y |
