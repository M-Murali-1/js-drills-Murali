export function cityCountry(arrayOfObjects) {
    for(let element of arrayOfObjects) {
        console.log(`${element.city} located in ${element.country}`);
    }
}