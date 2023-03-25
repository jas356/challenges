//reate a function that can converts fahrenheit to celcius.
//Sample output will says "Today is 80F (26.7C)." 

// function changeTemp (farenTemp){
//    let celciusTemp = (farenTemp - 32) * (5/9)
//  return celciusTemp.toFixed(2)
// } 

// Invoke function
// farenTemp = 81

// console.log(`Today is ${farenTemp} ºF ${changeTemp(farenTemp)} ºC`)


//# 3

    const jasmineHeyGirl = [
        2,// 0
        5, // 1
        7, // 2
        1337, // 3
        13,
        45
    ]
    let largestInt = 0 
    for (let i = 0; i < jasmineHeyGirl.length; i++) {
        let position = jasmineHeyGirl[i]
        if(position > largestInt){
            largestInt = position

        }
    }

    console.log(largestInt) // = 1337
// const result = challenge3()
// console.log('result', result)