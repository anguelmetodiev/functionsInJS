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

console.log("Question 2:")
// 2.
const maxOfThree = function(numberOne, numberTwo, numberThree) {
    if ((numberOne >= numberTwo) && (numberOne >= numberThree)) { 
        return numberOne;
    } else if ((numberTwo >= numberOne) && (numberTwo >= numberThree)) {
        return numberTwo;
    } else {
        return numberThree;
    }
  }
  
  console.log(maxOfThree(3, 4, 5)) // returns 5
  console.log(maxOfThree(6, 7, 9)) // returns 9
  console.log(maxOfThree(0, -2, 4)) // returns 4
  console.log(maxOfThree(3, 3, 3)) // returns 3