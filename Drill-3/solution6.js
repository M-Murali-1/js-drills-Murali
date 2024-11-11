export function bmwAudi(inventory) {
    let car = inventory.filter(element=>element.car_make=="Audi" || element.car_make=="BMW");

    return JSON.stringify(car);
}