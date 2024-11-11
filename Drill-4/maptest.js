
import { items } from "./arrays.js";
import { map } from "./mapsolution.js";

if (typeof items != "object" && Array.isArray(items)!=true) {
    //console.error("Invalid Data");
} else if (typeof items == "undefined") {
    //console.error("No Parameters given");
}
else {
    let required = map(items,(ele,inc)=>ele+inc);
    console.log(required);
    
}
