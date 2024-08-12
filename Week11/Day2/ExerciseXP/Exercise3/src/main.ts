type T = {
    country: string;
    length: number;
    director: string;
}

let t: T = {
    country: "France",
    length: 150,
    director: "Bertolucci",
}

type U = {
    name: string;
    age: number;
    city: string;
}

let u: U = {
    name: "George",
    age: 22,
    city: "Arlen",
}

function combineObjects(obj1: T, obj2: U) {
    type V = T & U;
    let v: V = {
        ...obj1, ...obj2
    }
    return v;
}

console.log(combineObjects(t, u));