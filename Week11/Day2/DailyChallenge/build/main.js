"use strict";
function validateUnionType(value, allowedTypes) {
    for (const type of allowedTypes) {
        if (typeof value === type) {
            return true;
        }
    }
    return false;
}
let allowedTypes = ["string", "number", "boolean"];
let stringToValidate = "Checking";
let numberToValidate = 375;
let booleanToValidate = false;
let arrToValidate = [1, 'thing', 323];
console.log(validateUnionType(stringToValidate, allowedTypes));
console.log(validateUnionType(numberToValidate, allowedTypes));
console.log(validateUnionType(booleanToValidate, allowedTypes));
console.log(validateUnionType(arrToValidate, allowedTypes));
