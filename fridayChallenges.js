//reate a function that can converts fahrenheit to celcius.
//Sample output will says "Today is 80F (26.7C)." 

function changeTemp (farenTemp){
   let celciusTemp = (farenTemp - 32) * (5/9)
 return celciusTemp.toFixed(2)
} 

// Invoke function
farenTemp = 81

console.log(`Today is ${farenTemp} ºF ${changeTemp(farenTemp)} ºC`)


