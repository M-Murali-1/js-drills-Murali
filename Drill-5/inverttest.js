import { invert } from "./invertsolution.js";
import { testObject } from "./objects.js";


if (typeof testObject != "object") {
    console.error("Invalid Data");
} else if (typeof testObject == "undefined") {
    console.error("No Parameters given");
}
else {
    let required = invert(testObject);
    console.log(required);
    
}
