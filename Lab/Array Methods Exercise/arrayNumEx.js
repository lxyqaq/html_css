var numbers = [456, -20, 33, 476, 999, 62, 7, -100, 10];

/* For all the following exercises:
		- make sure to print out the result to ensure you get the correct answers 
		- use the for...of loop for all the for loop examples
*/

/* 1. Use an array method to sort the numbers array */
var result1 = numbers.sort(function (a, b) {
    //Ascending
    return a - b;
});
console.log(result1);

var result2 = numbers.sort(function (a, b) {
    //Descending
    return b - a;
})
console.log(result2);

/* 2.1 Use an array method to create a new array with each element doubled */
numbers.map(num )


/* 2.2 Use a for loop to get the same result */


/* 3.1 Use an array method to create a new array with
		the negative values removed */


/* 3.2 Use a for loop to get the same result */


/* 4.1 Use the filter and forEach methods to add all the values greater than 100 */


/* 4.2 Use filter and reduce to get the same result */


/* 4.3 Use a for loop to get the same result */