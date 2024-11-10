import { arrayOfObjects } from "./persons.js";

export function hobbiesIndividual(arrayOfObjects,ageGiven) {
    arrayOfObjects
    .filter((element)=>{return element.age==ageGiven})
    .forEach((element)=>{console.log(`${element.name} hobbies are ${element.hobbies}`);});
}