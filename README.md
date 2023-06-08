## What
Ceci est un entrainement au refactoring 

## Installation
installe le projet avec ``npm install``
lance les tests avec ``npm run test``


## Hints for refactoring 

1 - Extract small reusable functions: Identify logical chunks of code within the processOrder function and extract them into smaller functions. This will improve the readability and reusability of the code.

2 - Improve error handling: Instead of throwing generic Error instances, consider creating custom error types or using existing error types from TypeScript or libraries. This will provide more specific information about the error.

3 - Separate validation logic: Move the validation logic  into separate functions. This will make the code more modular and easier to test.

4 - Use early returns: If a condition fails, consider using early returns to exit the function early and avoid nested if-else blocks. This can improve the readability and reduce the indentation levels.

5 - Avoid mutable state: Minimize the use of mutable state within the function. Instead of modifying the order, product stock, or other objects directly, consider creating new objects or data structures to represent the updated state.

6 - Improve naming and consistency: Review the variable and function names to ensure they are descriptive and follow a consistent naming convention. This will make the code more self-explanatory and easier to understand.
