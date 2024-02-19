const previousDisplay = document.getElementById("previous-display");
const currentDisplay = document.getElementById("current-display");
const keyNumbers = document.querySelectorAll(".key--number");
const keyOperators = document.querySelectorAll(".key--operator");
const keyEqual = document.querySelector(".key--equal");
const keyDelete = document.querySelector(".key--delete");
const keyClear = document.querySelector(".key--clear");
const keyClearEntry = document.querySelector(".key--clearE");
const keyPow = document.querySelector("key--pow");
const keySqrt = document.querySelector("key--sqrt");
const keyNegative = document.querySelector("key--negative");
const keyFraction = document.querySelector("key--fraction");


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

function formatNumberWithComa(str) {
    // Remove existing commas from the string
    str = str.replace(/,/g, "");
    // Split the string at the decimal point
    let parts = str.split(".");
    // Extract the part before the decimal point
    let integerPart = parts[0];
    // Format the integer part with commas
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // Concatenate the formatted integer part with the decimal part (if it exists)
    let formattedNumber = integerPart + (parts.length > 1 ? "." + parts[1] : "");
    return formattedNumber;
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
        }    // Format the number after concatenation
        currentDisplay.value = formatNumberWithComa(currentDisplay.value);
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
    let str = currentDisplay.value;
    // Check if the string is not empty and the first character is not "0"
    if (str.length > 0 && str.charAt(0) !== 0) {
        // Remove the last character using substring
        str = str.substring(0, str.length - 1);
        // Update the input value with the modified string
        currentDisplay.value = str;
      }
    // Check if the string is emmpty 
    if (currentDisplay.value === "") {
        // Reset to default value
        currentDisplay.value = "0";
    }
    // console.log("Delete clicked !");
    currentDisplay.value = formatNumberWithComa(currentDisplay.value);
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





