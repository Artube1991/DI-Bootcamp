const add = (x: number | string, y: number | string) => {
    if (typeof x === "number" && typeof y === "number") {
      return x + y;
    }
    if (typeof x === "string" && typeof y === "string") {
      return x.concat(y);
    }
    throw new Error("Parameters must be numbers or strings");
  }

console.log(add(342, 42323));
console.log(add("pine", "apple"));
// add(117, "grass");