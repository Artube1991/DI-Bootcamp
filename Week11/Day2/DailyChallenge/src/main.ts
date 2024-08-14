function validateUnionType(value: any, allowedTypes: string[]): boolean {
    for(const type of allowedTypes){
        if(typeof value === type) {
            return true
        }
    }
    return false;
}

let allowedTypes: string[] = ["string", "number", "boolean"]

let stringToValidate: string = "Checking";
let numberToValidate: number = 375;
let booleanToValidate: boolean = false;
let arrToValidate = [1, 'thing', 323];

console.log(validateUnionType(stringToValidate, allowedTypes));
console.log(validateUnionType(numberToValidate, allowedTypes));
console.log(validateUnionType(booleanToValidate, allowedTypes));
console.log(validateUnionType(arrToValidate, allowedTypes));