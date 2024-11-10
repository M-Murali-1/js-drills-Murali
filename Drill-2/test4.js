//Group users based on their Programming language mentioned in their designation.

import { users } from "./users.js";
import { ProgramGroup } from "./solution4.js";
let programmingGiven = "Golang";
if (typeof users != "object") {
    console.error("Invalid Data");
} else if (typeof users == "undefined" || typeof programmingGiven=="undefined") {
    console.error("No Parameters given");
}
else {
    console.log(ProgramGroup(users,programmingGiven));
    
}
