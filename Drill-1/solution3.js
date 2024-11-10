

export function studentCountry(arrayOfObjects,countryGiven) {
    let required = arrayOfObjects.filter((element)=>element.isStudent==true && element.country==countryGiven)
                                .map((element)=>element.name);
    return required;
}