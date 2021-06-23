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
    return acu.map(x => Intl.NumberFormat().format(x)).join(' ')
}

// Update the page

function showResult(input) {
    let userInput = parseInt(document.getElementById(input).value);
    let div = document.getElementById('result');
    div.innerHTML = generateNum(userInput);
    generateFile(generateNum());
};

// Create CSV file

function generateFile(num) {

    const csvFile = num;

    const blob = new Blob([csvFile], {
        type: 'text/csv;charset=utf-8;'
    });

    const link = document.createElement("a");

    if (link.download !== undefined) {

        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", 'file.csv');
        link.innerHTML = "Download the sequence as CSV file"
        document.body.appendChild(link);
    }
}