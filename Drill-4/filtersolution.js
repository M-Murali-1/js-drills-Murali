
export function filter(elements, cb) {
    // Do NOT use .filter, to complete this function.
    // Similar to `find` but you will return an array of all elements that passed the truth test
    // Return an empty array if no elements pass the truth test.
  let required=[];
    for(let index=0;index<elements.length;index++) {
        if(cb(elements[index])) {
            required.push(elements[index]);   
        }
    }
    return required;
  }