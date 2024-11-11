export function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert
    let inverted={};
    for(let key in obj) {
        inverted[obj[key]]=key;
    }
    return inverted;
  }