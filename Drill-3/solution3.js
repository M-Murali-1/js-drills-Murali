
export function carModelSort(inventory) {
    let carsModel = inventory.map((element)=>element.car_model);
    return carsModel.sort();
    
}