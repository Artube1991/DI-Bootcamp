interface Somebody {
    name: string;
    income: number;
}

let employee = <Somebody>{};
employee.name = "Eugene";
employee.income = 10000;

console.log(employee);