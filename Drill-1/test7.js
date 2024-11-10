// Write a function that accesses and prints the 
// names and email addresses of individuals aged 25.

// Write a function that accesses and logs the name and city of the individual
//  at the index position 3 in the dataset.

import { arrayOfObjects } from "./persons.js";
import { emailPrinter } from "./solution7.js";

let ageGiven = 25;
if (typeof arrayOfObjects != "object" && typeof arrayOfObjects[0] != "object") {
    console.error("Invalid Data");
} else if (typeof arrayOfObjects == "undefined" || typeof ageGiven == "undefined") {
    console.error("No Parameters given");
}
else {
    console.log(emailPrinter(arrayOfObjects,ageGiven));
}
