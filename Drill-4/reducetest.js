
import { items } from "./arrays.js";
import { reduced } from "./reducesolution.js";

if (typeof items != "object" && Array.isArray(items)!=true) {
    //console.error("Invalid Data");
} else if (typeof items == "undefined") {
    //console.error("No Parameters given");
}
else {
    let required = reduced(items,(ele,inc)=>ele+inc,0);
    console.log(required);
    
}
