const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json());

app.post("/calculate", (req, res) => {
  const { firstNumber, secondNumber, operation } = req.body;

  // Perform calculation based on the operation
  let result;
  if (operation === "addition") {
    result = firstNumber + secondNumber;
    console.log(result);
  } else if (operation === "subtraction") {
    result = firstNumber - secondNumber;
  } else if (operation === "multiplication") {
    result = firstNumber * secondNumber;
  } else if (operation === "percentage") {
    // Perform percentage calculation
    result = (firstNumber / 100) * secondNumber;
  }
  else if (operation === "pythagoras") {
    // Perform Pythagoras calculation
    result = Math.sqrt(Math.pow(firstNumber, 2) + Math.pow(secondNumber, 2));
  } else if (operation === "cylinderVolume") {
    // Perform cylinder volume calculation (πr^2h)
    result = Math.PI * Math.pow(firstNumber, 2) * secondNumber;
  } else if (operation === "circleArea") {
    result = Math.PI * Math.pow(firstNumber, 2);
} else if (operation === "squareRoot") {
    // Perform square root calculation
    result = Math.sqrt(firstNumber);

  }else if (operation === "division") {
    if (secondNumber !== 0) {
      result = firstNumber / secondNumber;
    } else {
      return res.status(400).send("Invalid input: Division by zero.");
    }
  } else {
    return res.status(400).send("Invalid operation.");
  } 
  

  res.send(result.toString());
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
