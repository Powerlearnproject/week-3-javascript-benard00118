// variables of different data types
let name = "Alice"; // string
let age = 25; // number
let isStudent = true; // boolean

//functions to perform simple operations

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

// Function to display result
function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Result: ${result}`;
    resultDiv.classList.remove('hidden');
}

// Function to clear inputs
function clearInputs() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
}

// Function to handle operations
function handleOperation(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }
    
    let result;
    switch (operation) {
        case 'add':
            result = add(num1, num2);
            break;
        case 'subtract':
            result = subtract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
    }
    
    displayResult(result);
    updateChart(`${operation.charAt(0).toUpperCase() + operation.slice(1)} Result`, [num1, num2, result]);
    clearInputs();
}

// Event listeners for buttons
document.getElementById('addButton').addEventListener('click', () => handleOperation('add'));
document.getElementById('subtractButton').addEventListener('click', () => handleOperation('subtract'));
document.getElementById('multiplyButton').addEventListener('click', () => handleOperation('multiply'));
document.getElementById('divideButton').addEventListener('click', () => handleOperation('divide'));

// Chart.js 
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Number 1', 'Number 2', 'Result'],
        datasets: [{
            label: 'Operation Result',
            data: [0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//update the chart
function updateChart(operation, data) {
    myChart.data.datasets[0].label = `${operation} Result`;
    myChart.data.datasets[0].data = data;
    myChart.update();
}


console.log("Name:", name);
console.log("Age:", age);
console.log("Is student:", isStudent);
