function pizzaOven(crustType, sauseType, cheese, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauseType = sauseType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;

    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var p2 = pizzaOven("hand tossed", "marianara", ["mozzarella", "feta"], ["mushroom", "olives", "onions"]);
var p3 = pizzaOven("thin", "white", ["mozzarella"], ["mushrooms", "chicken"]);
var p4 = pizzaOven("stuffed", "tomato", ["mozarella", "parmesan"], ["pesto", "mushrooms"] );

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
