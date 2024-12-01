// const mainContainer = AddCreatElement("div", "class", "mainContainer", document.body);
// const calculator = AddCreatElement("div", "class", "calculator", mainContainer);
// const Input = AddCreatElement("input", "class", "input", calculator) as HTMLInputElement;
// const acBtn = AddCreatElement("button", "class", "button btn", calculator, "AC","AC");
// const delBtn = AddCreatElement("button", "class", "button btn", calculator, "DC","DC");
// const modularBtn = AddCreatElement("button", "class", "button btn", calculator, "%", "%");
// const divideBtn = AddCreatElement("button", "class", "button btn", calculator, "/", "/");
// const seveBtn = AddCreatElement("button", "class", "button", calculator, "7", "7");
// const eightBtn = AddCreatElement("button", "class", "button", calculator, "8", "8");
// const nineBtn = AddCreatElement("button", "class", "button", calculator, "9", "9");
// const multiBtn = AddCreatElement("button", "class", "button btn", calculator, "*", "*");
// const fourBtn = AddCreatElement("button", "class", "button", calculator, "4", "4");
// const fiveBtn = AddCreatElement("button", "class", "button", calculator, "5", "5");
// const sixBtn = AddCreatElement("button", "class", "button", calculator, "6", "6");
// const subBtn = AddCreatElement("button", "class", "button btn", calculator, "-", "-");
// const oneBtn = AddCreatElement("button", "class", "button", calculator, "1", "1");
// const twoBtn = AddCreatElement("button", "class", "button", calculator, "2", "2");
// const threeBtn = AddCreatElement("button", "class", "button", calculator, "3", "3");
// const incrementBtn = AddCreatElement("button", "class", "button btn", calculator, "+", "+");
// const zeroBtn = AddCreatElement("button", "class", "button", calculator, "0", "0");
// const twpZeroBtn = AddCreatElement("button", "class", "button", calculator, "00", "00");
// const dotBtn = AddCreatElement("button", "class", "button", calculator, ".", ".");
// const equalBtn = AddCreatElement("button", "class", "eval button", calculator, "=");

// function AddCreatElement(
//     tag: keyof HTMLElementTagNameMap,
//     attName: string | null,
//     attType: string | null,
//     parent: HTMLElement | null,
//     text?: string,
//     value?: string
// ): HTMLElement {
//     const element = document.createElement(tag);

//     if (attName && attType) {
//         element.setAttribute(attName, attType);
//     }

//     if (parent) {
//         parent.appendChild(element);
//     }

//     if (text) {
//         element.innerText = text;
//     }

//     if (value) {
//         (element as HTMLInputElement).value = value;
//     }

//     return element;
// }



// calculator.addEventListener("click", targetEvent);

// function targetEvent(event: MouseEvent): void {
//     event.stopPropagation();

//     const target = event.target as HTMLElement;
//     const currentValue = (target as HTMLButtonElement).value;

//     if (currentValue && !isNaN(Number(currentValue))) {
//         Input.value += currentValue;
//     }

//     if (target.innerText === "AC") {
//         Input.value = "";
//     }

//     if (target.innerText === "DC") {
//         Input.value = Input.value.slice(0, -1);
//     }

//     if (target.classList.contains("eval")) {
//         if (Input.value === "") {
//             Input.value = "0";
//         } else {
//             try {
//                 Input.value = eval(Input.value); 
//             } catch {
//                 Input.value = "Error";
//             }
//         }
//     }

//     if (currentValue && isNaN(Number(currentValue)) && currentValue !== "AC" && currentValue !== "DC") {
//         const lastChar = Input.value[Input.value.length - 1];
//         if (lastChar && !isNaN(Number(lastChar))) {
//             Input.value += currentValue;
//         }
//     }
// }

// Define a utility function to create and append elements
function AddCreatElement(
    tag: keyof HTMLElementTagNameMap,
    attName: string | null,
    attType: string | null,
    parent: HTMLElement | null,
    text?: string,
    value?: string
): HTMLElement {
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
        (element as HTMLInputElement).value = value;
    }

    return element;
}

// Create calculator components
const mainContainer = AddCreatElement("div", "class", "mainContainer", document.body);
const calculator = AddCreatElement("div", "class", "calculator", mainContainer);
const Input = AddCreatElement("input", "class", "input", calculator) as HTMLInputElement;
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

// Event listener for calculator
calculator.addEventListener("click", targetEvent);

function targetEvent(event: MouseEvent): void {
    event.stopPropagation();

    const target = event.target as HTMLElement;
    const currentValue = (target as HTMLButtonElement).value;

    // Check if it's a number
    if (currentValue && !isNaN(Number(currentValue))) {
        Input.value += currentValue;
    }

    // Clear input on AC button
    if (target.innerText === "AC") {
        Input.value = "";
    }

    // Delete last character on DC button
    if (target.innerText === "DC") {
        Input.value = Input.value.slice(0, -1);
    }

    // Calculate result on "=" button
    if (target.classList.contains("eval")) {
        if (Input.value === "") {
            Input.value = "0";
        } else {
            try {
                Input.value = eval(Input.value); // Avoid eval in production
            } catch {
                Input.value = "Error";
            }
        }
    }

    // Append operators only if last character is a number
    if (currentValue && isNaN(Number(currentValue)) && currentValue !== "AC" && currentValue !== "DC") {
        const lastChar = Input.value[Input.value.length - 1];
        if (lastChar && !isNaN(Number(lastChar))) {
            Input.value += currentValue;
        }
    }
}
