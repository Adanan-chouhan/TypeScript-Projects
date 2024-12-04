const mainContainer = AddCreatElement("div", "class", "mainContainer", document.body);
const calculator = AddCreatElement("div", "class", "calculator", mainContainer);
const Input = AddCreatElement("input", "class", "input", calculator);
const acBtn = AddCreatElement("button", "class", "button btn", calculator, "AC");
const delBtn = AddCreatElement("button", "class", "button btn", calculator, "DC");
const modularBtn = AddCreatElement("button", "class", "button btn", calculator, "%", "%");
const divideBtn = AddCreatElement("button", "class", "button btn", calculator, "/", "/");
const seveBtn = AddCreatElement("button", "class", "button", calculator, "7", "7");
const eightBtn = AddCreatElement("button", "class", "button", calculator, "8", "8");
const nineBtn = AddCreatElement("button", "class", "button", calculator, "9", "9");
const multiBtn = AddCreatElement("button", "class", "button btn", calculator, "*", "*");
const fourBtn = AddCreatElement("button", "class", "button", calculator, "4", "4");
const fiveBtn = AddCreatElement("button", "class", "button", calculator, "5", "5");
const sixBtn = AddCreatElement("button", "class", "button", calculator, "6", "6");
const subBtn = AddCreatElement("button", "class", "button btn", calculator, "-", "-");
const oneBtn = AddCreatElement("button", "class", "button", calculator, "1", "1");
const twoBtn = AddCreatElement("button", "class", "button", calculator, "2", "2");
const threeBtn = AddCreatElement("button", "class", "button", calculator, "3", "3");
const incrementBtn = AddCreatElement("button", "class", "button btn", calculator, "+", "+");
const zeroBtn = AddCreatElement("button", "class", "button", calculator, "0", "0");
const twpZeroBtn = AddCreatElement("button", "class", "button", calculator, "00", "00");
const dotBtn = AddCreatElement("button", "class", "button", calculator, ".", ".");
const equalBtn = AddCreatElement("button", "class", "eval button", calculator, "=");



function AddCreatElement(tag, attName, attType, parent, text, value) {
    const element = document.createElement(tag);
    if (attName && attType) {
        element.setAttribute(attName, attType);
    }
    if (parent) {
        parent.appendChild(element);
    }
    if (text) {
        element.innerText = text;
    }
    if (value) {
        element.value = value;
    }
    return element;
}

calculator.addEventListener("click", targetEvent);
function targetEvent(event) {
    event.stopPropagation();
    const target = event.target;
    const currentValue = target.value;

    if (currentValue && !isNaN(Number(currentValue))) {
        Input.value += currentValue;
    }

    if (target.innerText === "AC") {
        Input.value = "";
    }

    if (target.innerText === "DC") {
        Input.value = Input.value.slice(0, -1);
    }

    if (target.classList.contains("eval")) {
        if (Input.value === "") {
            Input.value = "0";
        }
        else {
            try {
                Input.value = eval(Input.value); 
            }
            catch (_a) {
                Input.value = "Error";
            }
        }
    }

    if (currentValue && isNaN(Number(currentValue)) && currentValue !== "AC" && currentValue !== "DC") {
        const lastChar = Input.value[Input.value.length - 1];
        if (lastChar && !isNaN(Number(lastChar))) {
            Input.value += currentValue;
        }
    }
}
