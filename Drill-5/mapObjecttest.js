import { mapObject } from "./mapObjectsolution.js";
let testObject = {
    "JavaScript":1099,
    "Python":1299,
    "Cloud Computing":2499
};


if (typeof testObject != "object") {
    console.error("Invalid Data");
} else if (typeof testObject == "undefined") {
    console.error("No Parameters given");
}
else {
    //Reducing the prices of the courses by 100
    let required = mapObject(testObject,(x)=>x-100);
    console.log(required);
    
}
