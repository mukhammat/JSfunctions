let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }
    
    this.calculate = (str) => {
        let arr = str.split(' ');
        let a = +arr[0];
        let b = +arr[2];
        let op = arr[1];

        return (this.methods[op] || isNaN(a) || isNaN(b)) ? this.methods[op](a, b) : 1;
    }

    this.addMethod = (name, func) => {
        this.methods[name] = func;
    }
}
