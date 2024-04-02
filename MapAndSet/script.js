let myMap = new Map()

/*
    .set(..., ...)
    .get(...)
    .has(...)
    .delete(...)
    .size
    .clear()
*/

myMap.set('Thiago', 'Homem')
myMap.set('Gabi', 'Mulher')
for (const [key, value] of myMap) {
    console.log(`${key} é ${value}`);
  }
console.log(myMap.get('Thiago'))
console.log(myMap.has('Gabi'))
console.log(myMap.size)
myMap.delete('Gabi')
console.log(myMap.size)
myMap.clear()
console.log(myMap.size)

let mySet = new Set()

/*
    .add(...)
    .has(...)
    .delete(...)
    .size
*/

mySet.add({'Teste': 'abc'})
mySet.add(1)
mySet.add(1)
mySet.add(true)
mySet.add('Oi')
mySet.add(1.2)

console.log(mySet.size)
for (const item of mySet){
    console.log(item)
}
