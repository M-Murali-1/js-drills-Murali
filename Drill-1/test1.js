// Given the dataset of individuals, write a function that accesses and returns the email addresses 
// of all individuals.

    import { arrayOfObjects } from "./persons.js";
import { emailReturn } from "./solution1.js";
if (typeof arrayOfObjects != "object" && typeof arrayOfObjects[0] != "object") {
    console.error("Invalid Data");
} else if (typeof arrayOfObjects == "undefined") {
    console.error("No Parameters given");
}
else {
    console.log(emailReturn(arrayOfObjects));
}
