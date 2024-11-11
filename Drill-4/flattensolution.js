export function flatten(elements) {
    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
    let required =[];
    for(let index=0;index<elements.length;index++) {
        if(Array.isArray(elements[index])) {
            required=required.concat(flatten(elements[index]));
        }
        else {
            required.push(elements[index]);
        }
    }
    return required;
  }
  