// Initial array
const numbers = [1, 2, 3, 4];

// Function to create a promise that resolves after a delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to display results in the output div
function displayResult(result) {
    document.getElementById('output').textContent = result.join(', ');
}

// Initial Promise
delay(3000).then(() => {
    console.log('Initial Promise resolved with:', numbers);
    return numbers;
})
// First Transformation: Filter out odd numbers
.then(arr => {
    const evenNumbers = arr.filter(num => num % 2 === 0);
    return delay(1000).then(() => {
        console.log('After filtering odd numbers:', evenNumbers);
        displayResult(evenNumbers);
        return evenNumbers;
    });
})
// Second Transformation: Multiply even numbers by 2
.then(evenNumbers => {
    const multipliedNumbers = evenNumbers.map(num => num * 2);
    return delay(2000).then(() => {
        console.log('After multiplying by 2:', multipliedNumbers);
        displayResult(multipliedNumbers);
        return multipliedNumbers;
    });
})
.catch(err => {
    console.error('An error occurred:', err);
});
