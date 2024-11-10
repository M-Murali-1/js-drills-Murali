
export function videoGame(users,interest) {
    let people = [];
    for (let key in users) {
        if (users[key].interests[0].includes(interest)) {
            people.push(key);
        }

    }
    return people;
}