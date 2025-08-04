// var generateName = require('sillyname');
/*import generateName from 'sillyname'; // both import and require work, but import is preferred in modern Node.js
var sillyname = generateName();



console.log("My silly name is: " + sillyname);*/

import { randomSuperhero } from "superheroes";

const mySuperhero = randomSuperhero();
console.log("My superhero name is: " + mySuperhero);