const previousDisplay = document.getElementById("previous-display");
const currentDisplay = document.getElementById("current-display");
const keyNumbers = document.querySelectorAll(".key--number");
const keyOperators = document.querySelectorAll(".key--operator");
const keyEqual = document.querySelector(".key--equal");
const keyDelete = document.querySelector(".key--delete");
const keyClear = document.querySelector(".key--clear");
const keyClearEntry = document.querySelector(".key--clearE");
const keyPow = document.querySelector(".key--pow");
const keySqrt = document.querySelector(".key--sqrt");
const keyNegative = document.querySelector(".key--negative");
const keyFraction = document.querySelector(".key--fraction");

// Default currentDisplay value
function secondDisplay() {
    currentDisplay.value = "0";
}

// Update to previous display 
function updateDisplay(operatorText) {
    previousDisplay.textContent = currentDisplay.value + operatorText;
}

// Clear all 
function clear() {
    // Reset current display 
    currentDisplay.value = "0";
    // Reset previous display
    previousDisplay.textContent = "";
    // Reset operator
    keyOperators.value = undefined;
}

// Clear 2nd element
function clearEntry() {
    // Reset currentDisplay 
    currentDisplay.value = 0;
}

// Caculator 
function calculator() {
    // Spit the substring at " "
    let str = previousDisplay.textContent.split(" ");
    // console.log("Operator:", str[1]); // Log the operator
    let num = parseFloat(currentDisplay.value.replace(/,/g, '')); // Convert currentDisplay value to a number
    // console.log("Num:", num); // Log the num value
    let num1 = str[0];
    num1 = parseFloat(num1.replace(/,/g, ''));
    // console.log("Num1:", num1); // Log the num1 value
    switch (str[1]) { //Operator 
        case "+":
            num = num1 + num;
            break;
        case "-":
            num = num1 - num;
            break;
        case "*":
            num = num1 * num;
            break;
        case "÷":
            num = num1 / num;
            break;
        case "%":
            num = (num1 / 100) * num;
            break;
    }
    // console.log(num);
    // Update the current display and previous with the result
    previousDisplay.textContent = previousDisplay.textContent + currentDisplay.value + " ="
    currentDisplay.value = num.toLocaleString();
}

//Square
function sqare(sqrText) {
    // Update to previousDisplay
    previousDisplay.textContent = currentDisplay.value + sqrText;
    // Remove all comas in subtring 
    let num = parseFloat(currentDisplay.value.replace(/,/g, ''));
    //Display value on currentDisplay 
    currentDisplay.value = Math.pow(num, 2);
}

// Square Root 
function squareRoot(sqrtText) {
    // Update to previousDisplay
    previousDisplay.textContent = sqrtText + "(" + currentDisplay.value + ")";
    // Remove all comas in subtring 
    let num = parseFloat(currentDisplay.value.replace(/,/g, ''));
    // Display value on currentDisplay
    currentDisplay.value = Math.sqrt(num);
}

// Fraction 
function fraction(frcText) {
    // Update to previousDisplay
    previousDisplay.textContent = frcText + currentDisplay.value + " =";
    // Remove all comas in subtring 
    let num = parseFloat(currentDisplay.value.replace(/,/g, ''));
    // Display value on currentDisplay
    currentDisplay.value = 1 / num;
}

// Negative 
function addNegative(str) {
    // Check if the substring already starts with "-"
    if (!str.startsWith("-") && str != "0") {
        // If not, concatenate "-" with the substring
        str = "- " + str;
    }
    return str; // Return value 
}

// Format number 
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
    return formattedNumber; // Return value
}

// Number keys [0-9 & .]
keyNumbers.forEach(number => {
    number.addEventListener("click", function () {
        // If current display value === 0
        if (currentDisplay.value === "0") {
            // If da button clicked is a "."
            if (number.textContent === '.') {
                // add to currentDisplay
                currentDisplay.value += number.textContent;
            } else {
                // Replace default value = 0
                currentDisplay.value = number.textContent;
            }
        } else {
            // Check if the currentDisplay value already contains a "."
            if (!(number.textContent === '.' && currentDisplay.value.includes('.'))) {
                // Add to currentDisplay 
                currentDisplay.value += number.textContent;
            }
        }    // Format the number after concatenation
        currentDisplay.value = formatNumberWithComa(currentDisplay.value);
    });
});

// Fraction key (1/x)
keyFraction.addEventListener("click", function () {
    fraction("1 / ");
    // console.log("Key fraction is pressed !!");
});

// Operator keys
keyOperators.forEach(operator => {
    operator.addEventListener("click", function () {
        // Update to previousDisplay when button is clicked
        updateDisplay(operator.textContent);
        // previousDisplay.textContent = currentDisplay.value + operator.textContent;
    });
});

// Negative key
keyNegative.addEventListener("click", function () {
    // Assign the result of addNegative to currentDisplay.value
    currentDisplay.value = addNegative(currentDisplay.value);
    console.log("Key negative clicked !!");
});

// Square root key 
keySqrt.addEventListener("click", function () {
    squareRoot("√ ");
});

// Square key
keyPow.addEventListener("click", function () {
    sqare(" ²");
});

// Equal key
keyEqual.addEventListener("click", function () {
    calculator();
    console.log("Equal clicked !");
});

// Delete key
keyDelete.addEventListener("click", function () {
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

// Clear key
keyClear.addEventListener("click", function () {
    clear();
    // console.log("Clear clicked !");
});

//Clear entry key 
keyClearEntry.addEventListener("click", function () {
    clearEntry();
    // console.log("Clear entry clicked !");
});

secondDisplay();





