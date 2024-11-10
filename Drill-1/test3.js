// Create a function that extracts and displays the names of individuals who are 
// students (`isStudent: true`) and live in Australia.

import { arrayOfObjects } from "./persons.js";
import { studentCountry } from "./solution3.js";

let countryGiven = "Australia";
if (typeof arrayOfObjects != "object" && typeof arrayOfObjects[0] != "object") {
    console.error("Invalid Data");
} else if (typeof arrayOfObjects == "undefined" || typeof countryGiven == "undefined") {
    console.error("No Parameters given");
}
else {
    console.log(`The students studying in ${countryGiven} are ${studentCountry(arrayOfObjects,countryGiven)}`);
    
}
