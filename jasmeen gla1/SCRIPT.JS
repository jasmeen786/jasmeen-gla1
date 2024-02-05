document.addEventListener("DOMContentLoaded", function () {
    
    var fullName = "Jasmeen"; 
    var h1Element = document.createElement("h1");
    h1Element.innerText = fullName;
    h1Element.style.textAlign = "center";
    h1Element.style.color = "#A9A9A9";
    document.body.appendChild(h1Element);

   
    var input1 = document.createElement("input");
    input1.type = "number";
    input1.placeholder = "Enter number 1";

    var input2 = document.createElement("input");
    input2.type = "number";
    input2.placeholder = "Enter number 2";

    var addButton = document.createElement("button");
    addButton.innerText = "Calculate Sum";
    addButton.addEventListener("click", calculateSum);

    document.body.appendChild(input1);
    document.body.appendChild(input2);
    document.body.appendChild(addButton);

    
    var sumResult = document.createElement("div");
    document.body.appendChild(sumResult);

    function calculateSum() {
        var num1 = parseFloat(input1.value) || 0;
        var num2 = parseFloat(input2.value) || 0;
        var sum = num1 + num2;

       
        sumResult.innerText = "Sum: " + sum;
    }

    
    var validateInput = (input) => {
        try {
            var inputValue = parseFloat(input.value);
            if (isNaN(inputValue)) {
                throw new Error("Input must be a number");
            }

            
            input.style.border = "";
            return true;
        } catch (error) {
            
            var errorMessage = document.createElement("div");
            errorMessage.innerText = error.message;
            errorMessage.style.color = "red";
            document.body.appendChild(errorMessage);

           
            input.style.border = "2px solid red";
            return false;
        }
    };

   
    input1.addEventListener("blur", function () {
        validateInput(input1);
    });

    input2.addEventListener("blur", function () {
        validateInput(input2);
    });

    var styleElement = document.createElement("style");
    styleElement.innerHTML = `
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            padding: 20px;
        }

        input, button {
            margin: 10px;
            padding: 5px;
            font-size: 16px;
        }
    `;
    document.head.appendChild(styleElement);
});
