//    Implement a function that retrieves and prints the hobbies of individuals with a specific age,
//    say 30 years old.


import { arrayOfObjects } from "./persons.js";
import { hobbiesIndividual } from "./solution2.js"

let ageGiven = 30;
if (typeof arrayOfObjects != "object" && typeof arrayOfObjects[0] != "object") {
    console.error("Invalid Data");
} else if (typeof arrayOfObjects == "undefined" || typeof ageGiven == "undefined") {
    console.error("No Parameters given");
}
else {
    hobbiesIndividual(arrayOfObjects, ageGiven);
}
