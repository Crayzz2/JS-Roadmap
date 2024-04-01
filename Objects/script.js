let user = {
    name: 'Thiago',
    age: 20,
    "mais palavras": true
}

console.log(user)
console.log(`Name: ${user.name}, Age: ${user.age}, Use [] para acessar Multiplas palavras. ${user["mais palavras"]}`)

user.job = 'unemployed'

console.log(user.job)

delete user.name

console.log(user)

console.log("name" in user) //It was deleted on line 14
console.log("age" in user)

for(let key in user){
    console.log(`${key}: ${user[key]}`)
}

alert(typeof(user.age))