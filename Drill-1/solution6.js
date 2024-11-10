export function firstHobby(arrayOfObjects) {
    arrayOfObjects.forEach(element => {
        console.log(`${element.name} first hobby is ${element.hobbies[0]}`);
    });
}