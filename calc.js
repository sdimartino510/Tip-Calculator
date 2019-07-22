var inquirer = require("inquirer");

console.log("");
console.log("Tip Calculator!");
console.log("---------------");

inquirer
  .prompt([
    {
      type: "number",
      name: "billAmount",
      message: "How much is the bill?",
      validate: function(value) {
        var valid = !isNaN(parseFloat(value));
        return valid || "Please enter a number";
      }
    },
    {
      type: "number",
      name: "tipPercent",
      message: "What percentage would you like to tip?",
      validate: function(value) {
        var valid = !isNaN(parseFloat(value));
        return valid || "Please enter a number";
      }
    }
  ])
  .then(answers => {
    tipCalc(answers.billAmount, answers.tipPercent);
  });

function tipCalc(billAmount, tipPercent) {
  var tipDecimal = tipPercent / 100;
  var tipAmount = tipDecimal * billAmount;
  var billTotal = tipAmount + billAmount;
  console.log("The amount of the tip is $" + tipAmount.toFixed(2));
  console.log("Your total bill is $" + billTotal.toFixed(2));
}
