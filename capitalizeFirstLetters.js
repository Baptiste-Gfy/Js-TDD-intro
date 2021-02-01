// capitalizeFirst.js
const assert = require("assert");

// WRITE THE ACTUAL FUNCTION HERE

//  verifie que c'est bien une fonction
assert.strictEqual(typeof capitalizeFirstLetters, "function");
// verifie que cette fonction a bien 1 parametre
assert.strictEqual(capitalizeFirstLetters.length, 1);
// verifie le fonctionnement de la fonction
assert.strictEqual(capitalizeFirstLetters("je suis dev"), "Je Suis Dev");
assert.strictEqual(capitalizeFirstLetters("baptiste"), "Baptiste");
assert.strictEqual(capitalizeFirstLetters(""), "");
