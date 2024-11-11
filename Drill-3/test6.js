
// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.



import { inventory } from "./cars.js";
import { bmwAudi } from "./solution6.js";

if (typeof inventory != "object") {
    console.error("Invalid Data");
} else if (typeof inventory == "undefined") {
    console.error("No Parameters given");
}
else {
    console.log(bmwAudi(inventory));
    
}
