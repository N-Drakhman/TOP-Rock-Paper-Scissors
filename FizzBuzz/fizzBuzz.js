const inputNumber = parseInt(prompt("enter your number"));

for (let i = 1; i <= inputNumber; i++) {
  if (i % 3 == 0) {
    console.log("Fizz ");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 15 == 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}
