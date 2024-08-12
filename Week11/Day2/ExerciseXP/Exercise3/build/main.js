"use strict";
let t = {
    country: "France",
    length: 150,
    director: "Bertolucci",
};
let u = {
    name: "George",
    age: 22,
    city: "Arlen",
};
function combineObjects(obj1, obj2) {
    let v = Object.assign(Object.assign({}, obj1), obj2);
    return v;
}
console.log(combineObjects(t, u));
