

//function convertTemperature(start, scale){
//    if (scale == "C") {
//        let fahrenheit = (start * 9/5) + 32;
//        console.log(fahrenheit)
//    }

//    if (scale == "F") {
//        let celsius = (start - 32) * (5 / 9);
//        console.log(celsius)
//    }
//};

//convertTemperature(100, "C");



// Create a function called convertTemperature that takes two parameters: start (a number), and scale (a string containing either "C" for Celsius or "F" for Fahrenheit).

// For the temperature, use an if statement to check the scale parameter. If it is "C", convert the temperature to Fahrenheit using the formula: Fahrenheit = (Celsius * 9/5) + 32. If it is "F", convert the temperature to Celsius using the formula: Celsius = (Fahrenheit - 32) * 5/9.

// Display the converted temperature in the console.







//Create a function called convertTemperatureRange that takes three parameters: startValue (a number), endValue (a number), and scale (a string containing either "C" for Celsius or "F" for Fahrenheit).

//Inside the function, use a for loop to iterate through the temperatures from startValue to endValue (inclusive).

//For each temperature, use an if statement to check the scale parameter. If it is "C", convert the temperature to Fahrenheit using the formula: Fahrenheit = (Celsius * 9/5) + 32. If it is "F", convert the temperature to Celsius using the formula: Celsius = (Fahrenheit - 32) * 5/9.

//Display each converted temperature in the loop.

//Outside the function, prompt the user to enter a starting temperature, an ending temperature, and a scale (either "C" or "F").

//Call the convertTemperatureRange function with the user's inputs.

function convertTemperatureRange() {

    let startValue = document.getElementById("temp").value;
    let endValue =100;
    let scale =document.getElementById("scale").value;
    let result =document.getElementById("result");

    for (let i=startValue; i<=endValue; i++){

    if (scale == "C") {
        let fahrenheit = (i * 9/5) + 32;
        console.log(fahrenheit)
        document.getElementById("result").innerHTML
    }

    if (scale == "F") {
        let celsius = (i - 32) * (5 / 9);
        console.log(celsius)
        document.getElementById("result").innerHTML
    }
    }

    
    
}
