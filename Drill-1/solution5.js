export function nameAge(arrayOfObjects) {
    arrayOfObjects.forEach(element => {
        console.log(`${element.name} is ${element.age} older`);   
    });
}