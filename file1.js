
const { a: x } = require("./file2"); // name alias
const { a } = require("./file3");
const { add } = require("./utils/add");
const { subs } = require("./utils/subs");

console.log(x, a);
console.log(add(10, 15));
console.log(subs(25, 15));
console.log(add(x + a));
console.log(subs(x - a));