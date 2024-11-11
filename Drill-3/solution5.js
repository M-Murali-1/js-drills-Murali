
import { carYears } from "./solution4.js";
export function olderThan(inventory,yearGiven) {
let carYear = carYears(inventory);

let required = carYear.filter((element)=>element>=yearGiven);
console.log(required);
return required.length;
}