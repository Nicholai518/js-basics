// Variables
let priceBeforeTax = 2.40;

// Display price before tax
console.log('The price before tax: ' + priceBeforeTax);

// This does not provide a space
console.log();

// Display price after taz
console.log('The price including tax: ' + (priceBeforeTax + calculateTax(priceBeforeTax)));

// Functions
// Calculate tax
// Number can be a whole number or a decimal. Either works
function calculateTax(number){
    return number * .08;
}