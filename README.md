Helper function to replace the inbuilt Promise.all Function

## Specification:
- Preserves Order Of Results with that of the input
- Uses recommended ES6 features

## Parameters:
- An Array of promises


## How To Use:

1. Install the module by typing `npm i multipromiseresolver` in the node terminal

2. Import the module by writing `const allPromises = require('multipromiseresolver')`

3. Call the `allPromises` function on two valid Array inputs

## Example

```
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

allPromises([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
//=> [3, 42, "foo"]

```