let breakfast_db = [
    "The General",
    "Kopi Stop",
    "Coffee Man",
    "The Trader",
    "Ruby G's",
    "Rays",
];
let lunch_db = [
    "Sanchos",
    "Go Sushi",
    "Nando's",
    "The Taste of Italy",
    "Kopi Stop",
];
let dinner_db = [
    "Chows",
    "Go Sushi",
    "Trailer Boat Club",
    "Ski Club",
    "Alfonsinos",
    "Snapper Rocks",
    "Hot Tamale",
    "Meraki",
    "Moorish",
    "Nirvana",
];

function pick_dinner() {
    document.getElementById("result").innerHTML =
        "We are eating at: " +
        "<b>" +
        dinner_db[Math.floor(Math.random() * dinner_db.length)] +
        "</b>";
}

function pick_lunch() {
    document.getElementById("result").innerHTML =
        "We are eating at: " +
        "<b>" +
        lunch_db[Math.floor(Math.random() * lunch_db.length)] +
        "</b>";
}

function pick_brekky() {
    document.getElementById("result").innerHTML =
        "We are eating at: " +
        "<b>" +
        breakfast_db[Math.floor(Math.random() * breakfast_db.length)] +
        "</b>";
}

// Function to decide what mealtime isc hosen, then calls function specific to that meal
function mealtime() {
    if (document.getElementById("breakfast").checked) {
        pick_brekky();
    } else if (document.getElementById("lunch").checked) {
        pick_lunch();
    } else if (document.getElementById("dinner").checked) {
        pick_dinner();
    } else {
        document.getElementById("result").innerHTML =
            "Please Choose a Meal-time";
    }
}

// Sets all options to default style
function default_style() {
    document.getElementById("breakfast_label").style.backgroundColor =
        "var(--light-yellow)";
    document.getElementById("lunch_label").style.backgroundColor =
        "var(--light-yellow)";
    document.getElementById("dinner_label").style.backgroundColor =
        "var(--light-yellow)";
}

// Sets option to orange style. whatever stle is inputed
function orange_style(label) {
    let element_id ="'" + label + "_label" + "'";
    console.log(element_id);
    document.getElementById(element_id).style.backgroundColor =
        "var(--light-orange)";
}

function press_option() {
    if (document.getElementById("breakfast").checked) {
        default_style();
        orange_style("breakfast");
    } else if (document.getElementById("lunch").checked) {
        default_style();
        orange_style("lunch");
    } else if (document.getElementById("dinner").checked) {
        default_style();
        orange_style("dinner");
    }
}
