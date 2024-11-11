
// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function
//  that will return an array from the dealer data containing only the car years and log the
//   result in the console as it was returned.

import { inventory } from "./cars.js";
import { carYears } from "./solution4.js";

if (typeof inventory != "object") {
    console.error("Invalid Data");
} else if (typeof inventory == "undefined") {
    console.error("No Parameters given");
}
else {
    console.log(carYears(inventory));
    
}
