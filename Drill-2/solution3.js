export function masterQualification(users,qualificationGiven) {
    let people=[];
    for(let key in users) {
        if(users[key].qualification==qualificationGiven) {
            people.push(key);
        }
    }
    return people;
}