
const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'
import { flatten } from "./flattensolution.js";


if (typeof nestedArray != "object" && Array.isArray(nestedArray)!=true) {
    console.error("Invalid Data");
} else if (typeof nestedArray == "undefined") {
    console.error("No Parameters given");
}
else {
    let required = flatten(nestedArray);
    console.log(required);
    
}
