export function emailPrinter(arrayOfObjects,ageGiven) {
    let emails = arrayOfObjects.filter((element)=>element.age==ageGiven)
                               .map((element)=>element.email);
    return emails;
}