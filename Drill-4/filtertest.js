
import { items } from "./arrays.js";
import { filter } from "./filtersolution.js";

if (typeof items != "object" && Array.isArray(items)!=true) {
    console.error("Invalid Data");
} else if (typeof items == "undefined") {
    console.error("No Parameters given");
}
else {
    let required = filter(items,(ele)=>ele>3);
    console.log(required);
    
}
