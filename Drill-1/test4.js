// Write a function that accesses and logs the name and city of the individual
//  at the index position 3 in the dataset.

import { arrayOfObjects } from "./persons.js";
import { cityName } from "./solution4.js";

let position = 3;
if (typeof arrayOfObjects != "object" && typeof arrayOfObjects[0] != "object") {
    console.error("Invalid Data");
} else if (typeof arrayOfObjects == "undefined" || typeof position == "undefined") {
    console.error("No Parameters given");
}else if(position>=arrayOfObjects.length) {
    console.error("Index out of Bound");
    
}
else {
    cityName(arrayOfObjects,position);
}
