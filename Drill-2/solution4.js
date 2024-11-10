
export function ProgramGroup(users,programmingGiven) {
    let people = [];
    for (let key in users) {
        if (users[key].desgination.includes(programmingGiven)) {
            people.push(key);
        }

    }
    return people;
}