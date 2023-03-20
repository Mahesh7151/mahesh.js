let actors = ["sudeep", "pk", "Sharuk", "Jai B", "SR"]
let actress = ["Nayana", "DP", "PC", "Nayana", "DP", "PC"]

let movies_Players = [ actors,...actress]
console.log(movies_Players)

//What is spread (extract and copy)let emp = { id: 101, name: "rahul", sal: 45000, email: "rahul@gmail.com" }
let emp = { id: 101, name: "rahul", sal: 45000, email: "rahul@gmail.com" }
let detials = { email: "rahul@pm.com", loc: "waynad" }

let emp_Details = { ...emp, ...detials }


console.log(emp_Details)

