// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
//("Last car is a *car make goes here* *car model goes here*");


import { inventory } from "./cars.js";
import { lastCar } from "./solution2.js";

if (typeof inventory != "object") {
    console.error("Invalid Data");
} else if (typeof inventory == "undefined" ) {
    console.error("No Parameters given");
}
else {
    console.log(lastCar(inventory));
    
}

