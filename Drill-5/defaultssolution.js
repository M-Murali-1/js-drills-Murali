export function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults
    for(let key in defaultProps) {
        //console.log(key,obj[key],defaultProps[key]);
        if(obj[key]===undefined) {
            obj[key]=defaultProps[key];
        }
    }
    return obj;
  }
  