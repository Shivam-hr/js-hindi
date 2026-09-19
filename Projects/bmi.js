

function calculateBMI(weight, height) {
   let BMI = weight / (height * height);
    let ExactBMI = weight / (height * height);


    if (BMI < 18.5) {
        return "Underweight";
    }
    else if (BMI >= 18.5 && BMI < 24.9) {
        return "Normal weight";
    }
    else if (BMI >= 25 && BMI < 29.9) {
        return "Overweight";
    }
    else {
        return "Obese";
    }   
}


document.getElementById("calculate").addEventListener("click", function() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    var BMI = calculateBMI(weight, height);
    var ExactBMI = weight / (height * height);

    // console.log(BMI);
    document.getElementById("bmi-result").innerText = "Your BMI is: " + ExactBMI;
    
    document.getElementById("range-result").innerText = "Your range is: " + BMI;



});





