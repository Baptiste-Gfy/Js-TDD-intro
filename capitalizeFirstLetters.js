// capitalizeFirst.js
const assert = require("assert");

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters(input) {
  const result =
    input.length > 0
      ? input
          .split(" ")
          .map((e) => e[0].toUpperCase() + e.slice(1))
          .join(" ")
      : "";
  return result;
}
// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, "function");

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirstLetters transforms correctly
assert.strictEqual(capitalizeFirstLetters("je suis dev"), "Je Suis Dev");
assert.strictEqual(capitalizeFirstLetters("baptiste"), "Baptiste");
assert.strictEqual(capitalizeFirstLetters(""), "");
console.log("OK");
