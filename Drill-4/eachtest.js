
import { items } from "./arrays.js";
import { each } from "./eachsolution.js";

if (typeof items != "object" && Array.isArray(items)!=true) {
    //console.error("Invalid Data");
} else if (typeof items == "undefined") {
    //console.error("No Parameters given");
}
else {
    each(items,(ele,inde)=>{console.log(ele,inde)});
}
