(() => {
    const calc = {
        num1: "",
        num2: "",
        operator: "",
        result: "",
        operatorIsChosen: false,
        isCalculated: false,
        cacheDOM: function () {
            this.button = document.getElementsByClassName("btn");
            this.opButton = document.getElementsByClassName("btn-danger");
            this.display = document.getElementById("dis");
        },
        bindEvents: function () {
            for (i = 0; i < this.button.length; i++) {
                this.button[i].addEventListener("click", this.render);
            };
        },
        initiate: function () {
            this.cacheDOM();
            this.bindEvents();
            this.clear()
        },
        render: function () {
            if (this.value === "C") {
                calc.clear();
            }
            else if (this.className === "btn btn-danger" && !calc.operatorIsChosen && calc.num1 !== "") {
                calc.operatorIsChosen = true;
                calc.operator = this.value;
                console.log(calc.operator)
            }
            else if (!calc.operatorIsChosen && this.className === "btn btn-primary") {
                calc.num1 += this.value;
                calc.display.value = calc.num1;
                console.log(calc.num1)
            }
            else if (calc.operatorIsChosen && this.className === "btn btn-primary") {
                calc.num2 += this.value;
                calc.display.value = calc.num2;
                console.log(calc.num2)
            }
            else if (this.value === "=" && calc.num1 !== "" && calc.num2 !== "" && calc.operator !== "")
                calc.evaluate();
        },
        clear: function () {
            calc.num1 = "";
            calc.num2 = "";
            calc.operator = "";
            calc.operatorIsChosen = false;
            calc.isCalculated = false
            calc.display.value = "";
        },
        clearValues: function () {
            calc.num1 = "";
            calc.num2 = "";
            calc.operator = "";
            calc.operatorIsChosen = false;
            calc.isCalculated = false
        },
        evaluate: function () {
            let firstNum = parseInt(this.num1);
            let secondNum = parseInt(this.num2);

            if (this.operator === "+") {
                this.result = firstNum + secondNum;
            }
            else if (this.operator === "-") {
                this.result = firstNum - secondNum;
            }
            else if (this.operator === "*") {
                this.result = firstNum * secondNum;
            }
            else if (this.operator === "/") {
                this.result = firstNum / secondNum;
            };
            calc.display.value = calc.result;
            calc.clearValues();
        }
    }
    calc.initiate();
})();

