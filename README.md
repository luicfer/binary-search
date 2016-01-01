# binary-search
This is a really tiny, curryed, simple binary search library for Node.JS


# Example
```js
var bs = require("binary-search-curryed");
function cmp(a, b) { return a - b; }
bs(cmp,[1, 2, 3, 4], 3); // => 2
bs(cmp,[1, 2, 4, 5], 3); // => -3

//curry
bs(cmp)(arr)(mumber);
bs(cmp)(arr, mumber);
bs(cmd, arr)(mumber);
bs(cmd, arr, mumber);
```
