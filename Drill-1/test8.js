// Implement a loop to access and log the city and
// country of each individual in the dataset.

import { arrayOfObjects } from "./persons.js";
import { cityCountry } from "./solution8.js";

if (typeof arrayOfObjects != "object" && typeof arrayOfObjects[0] != "object") {
    console.error("Invalid Data");
} else if (typeof arrayOfObjects == "undefined") {
    console.error("No Parameters given");
}
else {
    cityCountry(arrayOfObjects);
}
