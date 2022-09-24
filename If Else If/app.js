document.write("<h3>If Else If Statement </h3>");
var per = 88;
if (per >= 80 && per <= 100) {
  console.log("You are in Merit");
} else if (per >= 60 && per < 80) {
  console.log("You are Ird Division");
} else if (per >= 45 && per < 60) {
  console.log("You are IIrd Division");
} else if (per >= 33 && per < 45) {
  console.log("You are IIIrd Division");
} else if (per < 33) {
  console.log("You are fail.");
} else {
  console.log("Please enter the valid Number");
}
