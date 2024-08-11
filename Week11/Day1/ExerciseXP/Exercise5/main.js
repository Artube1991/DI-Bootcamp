var add = function (x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    if (typeof x === "string" && typeof y === "string") {
        return x.concat(y);
    }
    throw new Error("Parameters must be numbers or strings");
};
console.log(add(342, 42323));
console.log(add("pine", "apple"));
// console.log(add(117, "grass"));
