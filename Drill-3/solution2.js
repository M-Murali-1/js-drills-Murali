export function lastCar(inventory) {
    let car = inventory[inventory.length-1];

    return `Last car is a ${car.car_make} ${car.car_model}`

}