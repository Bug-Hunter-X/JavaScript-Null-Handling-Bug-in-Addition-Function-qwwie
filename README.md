# JavaScript Null Handling Bug

This repository demonstrates a common bug in JavaScript related to null value handling within a simple addition function. The original code attempts to handle null values by returning 0; however, this behavior is not always desirable and can lead to unexpected results.

## Bug Description

The `foo` function is designed to add two numbers. If either of the input parameters is null, the function returns 0.  This behavior is problematic because it might mask errors or lead to incorrect calculations.  A better approach would involve either explicitly throwing an error when null values are detected or returning null to indicate that the operation is not possible.

## Solution

The solution presented in `bugSolution.js` provides two alternative ways of handling null values:

1.  **Throwing an error:** This approach raises an error explicitly when a null value is encountered, ensuring that the error is immediately detected and addressed.
2.  **Returning null:** This approach returns null to indicate that the addition operation cannot be performed due to invalid input.