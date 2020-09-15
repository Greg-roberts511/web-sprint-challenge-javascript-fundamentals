// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation:

//closure allows functions to pull parameters from scopes above, so internal is taken from the myFunction scope.

/* Task 2: Counter */

function summation(para) {
  let count = 0;
  for (let i = 0; i <= para; i++) {
    count += i;
  }
  return count;
}

console.log(summation(4));

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
