export function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
    let totalPairs=[];
    let individualPairs=[];
    for(let key in obj) {
        totalPairs.push([key,obj[key]]);
    }
    return totalPairs;
  }