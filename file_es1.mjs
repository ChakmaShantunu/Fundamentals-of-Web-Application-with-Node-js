// common js to esm

import { a } from "./file_es2.mjs";
import { b } from "./file_es3.mjs";

// const { a: x } = require("./file2"); // name alias
// const { a } = require("./file3");

console.log(a, b);
