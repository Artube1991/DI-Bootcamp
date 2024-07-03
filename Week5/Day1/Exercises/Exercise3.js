let result = prompt('Type a number: ')
let result_num = Number(result)
typeof(result_num)
console.log(typeof(result_num))
while (result_num < 10) {
    result_num = prompt('Type a number: ')
    typeof(result_num)
    console.log(typeof(result_num))
}