const previousDisplay = document.getElementById("previous-display");
const currentDisplay = document.getElementById("current-display");
const keyNumbers = document.querySelectorAll(".key--number");
const keyOperators = document.querySelectorAll(".key--operator");
const keyEqual = document.querySelector(".key--equal");
const keyDelete = document.querySelector(".key--delete");
const keyClear = document.querySelector(".key--clear");
const keyClearEntry = document.querySelector(".key--clearE");

function firstDisplay() {
    // if (currentDisplay.value === operator.textContent){
    //     previousDisplay.append(currentDisplay.value);
    // }
}

function secondDisplay() {
    currentDisplay.value = "0";
}

function clear() {

}

function clearEntry() {

}

function append() {

}

function caculator() {
    
}

keyNumbers.forEach(number => {
    number.addEventListener("click", function() {
        if (currentDisplay.value === "0") {
            currentDisplay.value = number.textContent;
        }
        else {
            currentDisplay.value += number.textContent;
        }
        console.log("Numbers clicked !");
    });
});

keyOperators.forEach(operator => {
    operator.addEventListener("click", function() {
        previousDisplay.textContent = currentDisplay.value + operator.textContent;
        // currentDisplay.value = number.textContent;
        // console.log("Operation clicked !");
    });
});

keyEqual.addEventListener("click", function() {
    // console.log("Equal clicked !");
});

keyDelete.addEventListener("click", function() {
    // console.log("Delete clicked !");
});

keyClear.addEventListener("click", function() {
    // console.log("Clear clicked !");
});

keyClearEntry.addEventListener("click", function() {
    // console.log("Clear entry clicked !");
});

secondDisplay();




