import { defaults } from "./defaultssolution.js";
let obj = {flavor: "chocolate"};
let defaultProps ={flavor: "vanilla", sprinkles: "lots"};
//fill the 1st object which are not there with the 2nd object. 

if (typeof obj != "object" || typeof defaultProps != "object") {
    console.error("Invalid Data");
} else if (typeof obj == "undefined" && typeof defaultProps == "undefined") {
    console.error("No Parameters given");
}else if(typeof defaultProps == "undefined") {
    console.log(obj);
} 
else {
    let required = defaults(obj,defaultProps);
    console.log(required);
    
}
