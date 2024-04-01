let user = {
    name: 'Thiago',
    age: 20,
    "mais palavras": true
}

let admin = {
    password: 'abc',
    __proto__: user
}

console.log(admin.name)
for (let prop in admin){
    let isOwn = admin.hasOwnProperty(prop);

    if (isOwn) {
        console.log(`Our: ${prop}`);
    } else {
        console.log(`Inherited: ${prop}`);
    }
}
