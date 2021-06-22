// Declare an empty array to store numbers
const acu = new Array();

// Function to sum last two elements
function sum(a) {
    return a[0] + a[1]
}

// Generate sequence

function generateNum(num) {

    for (let i = 0; i < num; i++) {

        if (acu.length in [0, 1]) {
            acu.push(i);

        } else {

            acu.push(sum(acu.slice(-2)))

        }

    }
    return acu.map(x => Intl.NumberFormat().format(x)).join(', ')
}

const fibonacci = function (number) {

    return generateNum(number)[number]
};


//module.exports = fibonacci;

//const userInput = document.getElementById('number').value;

function showResult(input) {
    let userInput = parseInt(document.getElementById(input).value);
    let div = document.getElementById('result');
    div.innerHTML =  generateNum(userInput);
};

