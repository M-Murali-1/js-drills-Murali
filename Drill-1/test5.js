// Implement a loop to access and print the ages of all individuals
// in the dataset.

import { arrayOfObjects } from "./persons.js";
import { nameAge } from "./solution5.js";

if (typeof arrayOfObjects != "object" && typeof arrayOfObjects[0] != "object") {
    console.error("Invalid Data");
} else if (typeof arrayOfObjects == "undefined") {
    console.error("No Parameters given");
}
else {
    nameAge(arrayOfObjects);
}
