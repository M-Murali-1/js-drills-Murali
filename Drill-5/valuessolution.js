export function values(obj) {
    // Return all of the values of the object's own properties.
    // Ignore functions
    // http://underscorejs.org/#values
    let required=[];
    for(let value in obj) {
        required.push(obj[value]);
    }
    return required;
  }