// IIFE to initiate object
(() => {
    const calc = {
        // "Local Variables"
        num1: "",
        num2: "",
        operator: "",
        result: "",
        operatorIsChosen: false,
        isCalculated: false,
        // Convience variables
        cacheDOM: function () {
            this.button = document.getElementsByClassName("btn");
            this.opButton = document.getElementsByClassName("btn-danger");
            this.display = document.getElementById("dis");
        },
        // Binds Events
        bindEvents: function () {
            for (i = 0; i < this.button.length; i++) {
                this.button[i].addEventListener("click", this.render);
            };
        },
        // Initiates Calculator
        initiate: function () {
            this.cacheDOM();
            this.bindEvents();
            this.clear()
        },
        // Log/filter for rendering of input to calculator display
        render: function () {
            if (this.value === "C") {
                calc.clear();
            }
            else if (this.className === "btn btn-danger" && !calc.operatorIsChosen && calc.num1 !== "") {
                calc.operatorIsChosen = true;
                calc.operator = this.value;
            }
            else if (!calc.operatorIsChosen && this.className === "btn btn-primary") {
                calc.num1 += this.value;
                calc.display.value = calc.num1;
            }
            else if (calc.operatorIsChosen && this.className === "btn btn-primary") {
                calc.num2 += this.value;
                calc.display.value = calc.num2;
            }
            else if (this.value === "=" && calc.num1 !== "" && calc.num2 !== "" && calc.operator !== "")
                calc.evaluate();
        },
        // Clears calculator/sets local variable to empty
        clear: function () {
            calc.num1 = "";
            calc.num2 = "";
            calc.operator = "";
            calc.operatorIsChosen = false;
            calc.isCalculated = false
            calc.display.value = "";
        },
        // Empties local variables except display
        clearValues: function () {
            calc.num1 = "";
            calc.num2 = "";
            calc.operator = "";
            calc.operatorIsChosen = false;
            calc.isCalculated = false
        },
        // Math logic depending on operator
        evaluate: function () {
            const firstNum = parseInt(this.num1);
            const secondNum = parseInt(this.num2);

            switch (this.operator) {
                case "+":
                    this.result = firstNum + secondNum;
                    break;
                case "-":
                    this.result = firstNum - secondNum;
                    break;
                case "*":
                    this.result = firstNum * secondNum;
                    break;
                case "/":
                    this.result = firstNum / secondNum;
                    break;
            }
            calc.display.value = calc.result;
            calc.clearValues();
        }
    };
    calc.initiate();
})();

