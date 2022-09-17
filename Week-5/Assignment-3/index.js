const hasDuplicate = arr => new Set(arr).size !==arr.length;

let result = hasDuplicate([1,2,3,4,5,6,7,8,9,10,3,6,3,6,21,6]);

console.log(result);

