console.log("Question 1:")
// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9)); // returns 9
  console.log(maxOfTwoNumbers(-5, 12)); // returns 12
  console.log(maxOfTwoNumbers(4, 0)); // returns 4