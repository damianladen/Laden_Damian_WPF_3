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

    // Print the calorie information
    console.log("Today you ate " + total + " calories, this is " + totalPercent(total) + "% of the daily recommended amount");

    // Leave the while loop
    break;
}

/* I typed in 500 for breakfast, 500 for lunch and 600 for dinner and it gave me 1600 calories total and it gave me 80% for the daily percentage
 */

/* When I entered 600 for breakfast, 900 for lunch and 800 for dinner it gave me 2300 calories total and 114.9999% for the daily total.
 */