//Find all users who are interested in playing video games.

import { users } from "./users.js";
import { videoGame } from "./solution1.js";
let interest = "Video Games";
if (typeof users != "object") {
    console.error("Invalid Data");
} else if (typeof users == "undefined" || typeof interest=="undefined") {
    console.error("No Parameters given");
}
else {
    console.log(videoGame(users,interest));
    
}
