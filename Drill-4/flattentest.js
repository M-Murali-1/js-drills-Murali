
const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'
import { flatten } from "./flattensolution.js";
import { items } from "./arrays.js";


if (typeof items != "object" && Array.isArray(items)!=true) {
    console.error("Invalid Data");
} else if (typeof items == "undefined") {
    console.error("No Parameters given");
}
else {
    let required = flatten(items);
    console.log(required);
    
}
