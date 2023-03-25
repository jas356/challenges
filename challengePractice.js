const numAdults = 30
const slicePizza = 8
const eatPizza = 3

function numPizza(numAdults, slicePizza, eatPizza) {
  const totalPizza = (numAdults * eatPizza)/ slicePizza
  return Math.ceil (totalPizza)
}
 
console.log(numPizza (numAdults, slicePizza, eatPizza) )


