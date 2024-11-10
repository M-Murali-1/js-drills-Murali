// Given the dataset of individuals, write a function that accesses and returns

import { arrayOfObjects } from "./persons.js";

//  the email addresses of all individuals.
let emailAll=[];
export function emailReturn(arrayOfObjects) {
    for(let obj of arrayOfObjects) {
        emailAll.push(obj.email);
        
    }

return emailAll;
}