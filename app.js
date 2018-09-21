(() => {
    const calculator = {
        string: "",
        input: [],
        operators: ["+", "-", "*", "/", "="],
        cacheDOM: function () {
            this.button = document.getElementsByClassName("btn");
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
            if (this.value === "C") {
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
            this.input = [];
            this.render();
        }
    };
    calculator.initiate();
    console.log(calculator)
})();