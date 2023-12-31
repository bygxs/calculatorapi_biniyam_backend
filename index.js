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
  } else if (operation === "division") {
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
