let sub = (a, b) => a - b
let m = (a, b) => a / b

let calc = (a, b, callback) => {
    return callback(a, b)
}
console.log(calc(108, 20, sub)) //30
console.log(calc(100, 20, m))//200