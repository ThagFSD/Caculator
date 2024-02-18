const previousDisplay = document.getElementById("previous-display");
const currentDisplay = document.getElementById("current-display");
const keyNumbers = document.querySelectorAll(".key--number");
const keyOperators = document.querySelectorAll(".key--operator");
const keyEqual = document.querySelector(".key--equal");
const keyDelete = document.querySelector(".key--delete");
const keyClear = document.querySelector(".key--clear");
const keyClearEntry = document.querySelector(".key--clearE");


function secondDisplay() {
    currentDisplay.value = "0";
}

function clear() {
    currentDisplay.value = "0";
    previousDisplay.textContent = "";
    keyOperators.value = undefined;
}

function clearEntry() {
    currentDisplay.value = 0;
}

function append() {

}

function caculator() {
    
}

keyNumbers.forEach(number => {
    number.addEventListener("click", function() { 
        if (currentDisplay.value === "0") {
            if (number.textContent === '.') {
                currentDisplay.value += number.textContent;
            } else {
                currentDisplay.value = number.textContent;
            }
        } else {
            // Check if the current display value already contains a decimal point
            if (!(number.textContent === '.' && currentDisplay.value.includes('.'))) {
                currentDisplay.value += number.textContent;
            }
        }   
    });
});

keyOperators.forEach(operator => {
    operator.addEventListener("click", function() {
        previousDisplay.textContent = currentDisplay.value + operator.textContent;
    });
});

keyEqual.addEventListener("click", function() {
    // console.log("Equal clicked !");
});

keyDelete.addEventListener("click", function() {
    // console.log("Delete clicked !");
});

keyClear.addEventListener("click", function() {
    clear();
    // console.log("Clear clicked !");
});

keyClearEntry.addEventListener("click", function() {
    clearEntry();
    // console.log("Clear entry clicked !");
});

secondDisplay();




