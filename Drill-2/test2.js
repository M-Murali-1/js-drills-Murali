//Find all users staying in Germany.

import { users } from "./users.js";
import { liveinCountry } from "./solution2.js";
let countryGiven = "Germany";
if (typeof users != "object") {
    console.error("Invalid Data");
} else if (typeof users == "undefined" || typeof countryGiven=="undefined") {
    console.error("No Parameters given");
}
else {
    console.log(liveinCountry(users,countryGiven));
    
}
