
import { items } from "./arrays.js";
import { find } from "./findsolution.js";

if (typeof items != "object" && Array.isArray(items)!=true) {
    console.error("Invalid Data");
} else if (typeof items == "undefined") {
    console.error("No Parameters given");
}
else {
    let required = find(items,(ele)=>ele>3);
    console.log(required);
    
}
