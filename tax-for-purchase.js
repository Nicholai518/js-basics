// Variables
let priceBeforeTax = 2.40;

beforeTax(priceBeforeTax);

console.log("");
// Display price after taz
console.log('The price including tax: ' + (priceBeforeTax + calculateTax(priceBeforeTax)));

// Functions
// Calculate tax
// Number can be a whole number or a decimal. Either works
function calculateTax(number){
    return number * .08;
}

function beforeTax(number){
// Display price before tax
console.log('The price before tax: ' + priceBeforeTax);
}