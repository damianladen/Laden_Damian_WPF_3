// Damian Laden
// 4/30/2015
// Functions Assignment Week 4

// Total calories eaten in a day
var total = 0;

// Calculate the total amount eaten for each meal
function totalCalories(breakfast, lunch, dinner){
    return parseInt(a) + parseInt(b) + parseInt(c);
}

// Get user input
var a = prompt("How many calories did you eat at breakfast?"),
    b = prompt("How many calories did you eat at lunch?"),
    c = prompt("How many calories did you eat for dinner?");

// Check user input
while(a && b && c){

    // Calculate total calories for the day using user input
    total = totalCalories(a, b, c);

    // Figure out what percent this is of the daily recommended total
    var totalPercent = function(t){

        // Calculate percentage of total based on a 2000 calorie/day diet
        return (t / 2000) * 100;

    }