export function keys(obj) {
    let required=[];
    // Retrieve all the names of the object's properties.
    // Return the keys as strings in an array.
    // Based on http://underscorejs.org/#keys
    for(let value in obj) {
        //All the keys will be given by using the for in loop as the strings.
        //console.log(value,typeof value);
        required.push(value);
    }
    return required;
  }