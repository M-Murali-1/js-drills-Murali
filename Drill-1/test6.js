// Create a function to retrieve and display the first hobby 
// of each individual in the dataset.

import { arrayOfObjects } from "./persons.js";
import { firstHobby } from "./solution6.js";

if (typeof arrayOfObjects != "object" && typeof arrayOfObjects[0] != "object") {
    console.error("Invalid Data");
} else if (typeof arrayOfObjects == "undefined") {
    console.error("No Parameters given");
}
else {
    firstHobby(arrayOfObjects);
}
