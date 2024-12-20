# Unexpected Behavior with Switch Statement and Strings in JavaScript

This repository demonstrates a common error in JavaScript: unexpected behavior when handling different data types using the switch statement. The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the corrected version.

## Bug Description

The issue arises when using the switch statement with strings.  The switch statement performs a strict equality check (===), which can lead to unexpected results if the data type of the variable being checked doesn't match the case values. This can cause cases to be missed, resulting in incorrect behavior.

## Bug Solution

The solution involves carefully checking data types and handling potential type mismatches. In this case, type coercion or using a different control flow structure (like if/else if/else) can resolve the issue.  The `bugSolution.js` file provides a corrected version which addresses this problem.