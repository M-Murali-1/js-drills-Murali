// Find all users with masters Degree.

import { users } from "./users.js";
import { masterQualification } from "./solution3.js";
let qualificationGiven = "Masters";
if (typeof users != "object") {
    console.error("Invalid Data");
} else if (typeof users == "undefined" || typeof qualificationGiven=="undefined") {
    console.error("No Parameters given");
}
else {
    console.log(masterQualification(users,qualificationGiven));
    
}
