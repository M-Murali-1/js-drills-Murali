export function liveinCountry(users,countryGiven) {
    let people=[];
    for(let key in users) {
        if(users[key].nationality==countryGiven) {
            people.push(key);
        }
    }
    return people;
}