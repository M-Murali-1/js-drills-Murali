export function mapObject(obj, cb) {
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject
    for(let value in obj) {
        obj[value]=cb(obj[value]);
    }
    return obj;
  }