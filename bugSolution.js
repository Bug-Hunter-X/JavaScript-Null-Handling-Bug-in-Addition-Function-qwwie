function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed'); // Throw an error for null values
  }
  return a + b;
}

console.log(foo(5,5)); // Output: 10

//Alternative Solution returning null
function foo2(a,b){
  if (a === null || b === null){
    return null; // Return null if null values are present
  }
  return a + b;
}
console.log(foo2(5,5)); //Output: 10
console.log(foo2(null,5)); //Output: null