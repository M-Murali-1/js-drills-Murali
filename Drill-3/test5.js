
// ==== Problem #5 ====
// The car lot manager needs to find out how many cars
//  are older than the year 2000. Using the array
//   you just obtained from the previous problem,
//     find out how many cars were made before the year
// 2000 and return the array of older cars and log 
//     its length.

import { inventory } from "./cars.js";
import { olderThan } from "./solution5.js";


let yearGiven = 2000;
if (typeof inventory != "object") {
    console.error("Invalid Data");
} else if (typeof inventory == "undefined" || typeof yearGiven=="undefined") {
    console.error("No Parameters given");
}
else {
    console.log(olderThan(inventory,yearGiven));
    
}
