export function carId(inventory,idGiven) {
        let car = inventory.filter(element=>element.id==idGiven);

        return `Car ${car[0].id} is a ${car[0].car_year} ${car[0].car_make} ${car[0].car_model}`
    
}