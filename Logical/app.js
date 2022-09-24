document.write("<h3>Logical Operators</h3>");

// And (&&)
// Or (||)
// Not (!)

// And (&&)

var age = 18;

if (age >= 16 && age <= 21) {
  console.log("(&&) you are eligible :>> ", age);
} else {
  console.log("you are not eligible");
}

// Or (||)

var a = 18;

if (a >= 16 || a <= 21) {
  console.log("(||) you are eligible :>> ", a);
} else {
  console.log("you are not eligible");
}

// Not (!)

var b = 18;

if (!b >= 16) {
  console.log("(!) you are eligible :>> ", b);
} else {
  console.log("you are not eligible");
}
