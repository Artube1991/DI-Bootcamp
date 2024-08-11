function getDetails(age, name) {
    var tpl = [age, name, "Hello, I am ".concat(name, ", ").concat(age, " years old. Hi from TypeSript!")];
    return tpl;
}
;
console.log(getDetails(59, "Moby"));
