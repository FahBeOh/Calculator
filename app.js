(() => {
    const calculator = {
        string: "",
        input: [""],
        operators: ["+", "-", "*", "/", "=", "C"],
        cacheDOM: function () {
            this.button = document.getElementsByClassName("btn");
            this.opButton = document.getElementsByClassName("btn-danger");
            this.display = document.getElementById("dis");
        },
        bindEvents: function () {
            for (i = 0; i < this.button.length; i++) {
                this.button[i].addEventListener("click", this.update);
            };
        },
        initiate: function () {
            this.cacheDOM();
            this.bindEvents();
        },
        update: function () {
            if (calculator.input.length === 1 && calculator.operators.includes(this.value)) {
                return
            }
            else if (this.value === "=") {
                calculator.input = [""];
                calculator.input.push(eval(calculator.string));
                calculator.render();
            }
            else if (this.value === "C") {
                calculator.clear();
            }
            else {
                calculator.input.push(this.value);
                console.log(calculator.input);
                calculator.render();
            };
        },
        render: function () {
            this.string = this.input.join("");
            this.display.value = "";
            this.display.value+=this.string;
            console.log(this.string);
        },
        clear: function ()  {
            this.string = "";
            this.input = [""];
            this.render();
        }
    };
    calculator.initiate();
    console.log(calculator)
})();

