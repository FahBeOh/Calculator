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
            calculator.input.push(this.value);
            console.log(calculator.input)
            calculator.render()
        },
        render: function () {
            this.string = this.input.join("");
            this.display.value = "";
            this.display.value+=this.string;
            console.log(this.string)
        }
    };
    calculator.initiate();
})();