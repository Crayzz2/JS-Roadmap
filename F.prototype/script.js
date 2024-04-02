let animal = {
    eats: true
}

function Rabbit(name){ //Construtor
    this.name = name;
}

Rabbit.prototype = animal; //Define o prototipo animal com .prototype

let rabbit = new Rabbit('White');

alert(rabbit.eats)