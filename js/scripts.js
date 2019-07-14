
var century, year, month, dayOfMonth, dayOfWeek, dayNum, gender;
var males = ["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function input() {
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayOfMonth = parseInt(document.getElementById("date").value);
}

function calculate() {
    input();

    dayOfWeek = (((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7;
    console.log(dayOfWeek);

    return (Math.floor(dayOfWeek));
}

function checkDayOfWeek() {
    dayNum = calculate();
    checkGender();
}

function checkGender() {
    var radios = document.getElementsByName("gender");
    if (radios[0].checked == true) {
        var gender = "male";
    } else if (radios[1].checked == true) {
        var gender = "female";
    } else {
        console.log("radios pass");
    }
    switch (gender) {
        case "male":
            if (dayNum == 1) {
                document.getElementById("birthday").innerHTML = dayNum;
                document.getElementById("weekday").innerHTML = "The day is on a sunday.";
                document.getElementById("akan").innerHTML = "Your akan name is  kwasi";
            } else if (dayNum == 2) {
                document.getElementById("birthday").innerHTML = dayNum;
                document.getElementById("weekday").innerHTML = "The day is on a monday.";
                document.getElementById("akan").innerHTML = "Your akan name is  kwadwo";
            } else if (dayNum == 3) {
                document.getElementById("birthday").innerHTML = dayNum;
                document.getElementById("weekday").innerHTML = "The day is on a tuesday.";
                document.getElementById("akan").innerHTML = "Your akan name is  kwabena";
            } else if (dayNum == 4) {
                document.getElementById("birthday").innerHTML = dayNum;
                document.getElementById("weekday").innerHTML = "The day is on a wednesday.";
                document.getElementById("akan").innerHTML = "Your akan name is  kwaku";
            } else if (dayNum == 5) {
                document.getElementById("birthday").innerHTML = dayNum;
                document.getElementById("weekday").innerHTML = "The day is on a thursday.";
                document.getElementById("akan").innerHTML = "Your akan name is  yaw";
            } else if (dayNum == 6) {
                document.getElementById("birthday").innerHTML = dayNum;
                document.getElementById("weekday").innerHTML = "The day is on a friday.";
                document.getElementById("akan").innerHTML = "Your akan name is  kofi";
            } else if (dayNum == 7) {
                document.getElementById("birthday").innerHTML = dayNum;
                document.getElementById("weekday").innerHTML = "The day is on a saturday.";
                document.getElementById("akan").innerHTML = "Your akan name is  kwame";
            }
            break;
        case "female":
            if (dayNum == 1) {
                document.getElementById("birthday").innerHTML = dayNum;
                document.getElementById("weekday").innerHTML = "The day is on a sunday.";
                document.getElementById("akan").innerHTML = "Your akan name is  akosua";
            } else if (dayNum == 2) {
                document.getElementById("birthday").innerHTML = dayNum;
                document.getElementById("weekday").innerHTML = "The day is on a monday.";
                document.getElementById("akan").innerHTML = "Your akan name is  adwoa";
            } else if (dayNum == 3) {
                document.getElementById("birthday").innerHTML = dayNum;
                document.getElementById("weekday").innerHTML = "The day is on a tuesday.";
                document.getElementById("akan").innerHTML = "Your akan name is  abenaa";
            } else if (dayNum == 4) {
                document.getElementById("birthday").innerHTML = dayNum;
                document.getElementById("weekday").innerHTML = "The day is on a wednesday.";
                document.getElementById("akan").innerHTML = "Your akan name is  akua";
            } else if (dayNum == 5) {
                document.getElementById("birthday").innerHTML = dayNum;
                document.getElementById("weekday").innerHTML = "The day is on a thursday.";
                document.getElementById("akan").innerHTML = "Your akan name is  yaa";
            } else if (dayNum == 6) {
                document.getElementById("birthday").innerHTML = dayNum;
                document.getElementById("weekday").innerHTML = "The day is on a friday.";
                document.getElementById("akan").innerHTML = "Your akan name is  afua";
            } else if (dayNum == 7) {
                document.getElementById("birthday").innerHTML = dayNum;
                document.getElementById("weekday").innerHTML = "The day is on a saturday.";
                document.getElementById("akan").innerHTML = "Your akan name is  ama";
            }
            break
        default:
            console.log("pass");
    }
}