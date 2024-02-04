
function lifeInWeeks(age){
var yearsRemaining = 90 - age;
    var days = yearsRemaining * 52;
    var weeks = yearsRemaining * 365;
    var months = yearsRemaining * 12;

    console.log("you have" + days + " days " +
                weeks + " weeks" + months + " months " + "left")
}

lifeInWeeks(20)


function bmiCalculator(weight, height){
    var bmi = weight/ (height * height)
    return Math.round(bmi)
}

bmiCalculator(65, 1.8)
