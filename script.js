const output = document.querySelector('#output');
const digits = document.querySelectorAll('button');
const eqLine = document.querySelector('#eqLine');
let operator = '';
let firstArg = '';
let secondArg = '';

function add(a, b){
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b){
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b){
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b){
    if (parseFloat(b) == 0){
        return "can't quite answer this one cheif";
    }
    else{
        return parseFloat(a) / parseFloat(b);
    }
}

function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        case '^':
            return Math.pow(parseFloat(num1), parseFloat(num2));
            break;
    }
}

function boundsCheck(){
    if (output.textContent.includes("Infinity") || output.textContent.includes("nan")){
        output.textContent = "You have exceeded the realms of my knowledge...";
    }
}

function firstArgOps(input){
    if (input == '.' && firstArg.includes('.')){
        return;
    }
    if (input == '+/-' && output.textContent == ''){
        return;
    }
    if (input == '+/-'){
        firstArg = -(parseFloat(firstArg));
        firstArg = firstArg.toString();
        output.textContent = firstArg;
        return;
    }
    if (input == 'back'){
        firstArg = firstArg.split('');
        firstArg.pop();
        firstArg = firstArg.join('');
        output.textContent = firstArg;
        return;
    }
    if (input == '%' && output.textContent == ''){
        return;
    }
    if(input == "%"){
        firstArg = (parseFloat(firstArg)/100);
        firstArg = firstArg.toString();
        output.textContent = firstArg;
        return;
    }
    firstArg += input;
    output.textContent += input;
    boundsCheck();
}

function secondArgOps(input){
    if (secondArg == '' && output.textContent != ''){
        output.textContent = '';
    }
    if (input == '.' && secondArg.includes('.')){
        return;
    }
    if (input == '+/-' && output.textContent == ''){
        return;
    }
    if (input == '+/-'){
        secondArg = -(parseFloat(secondArg));
        secondArg = secondArg.toString();
        output.textContent = secondArg;
        return;
    }
    if (input == '%' && output.textContent == ''){
        return;
    }
    if(input == "%"){
        secondArg = (parseFloat(secondArg)/100);
        secondArg = secondArg.toString();
        output.textContent = secondArg;
        return;
    }
    secondArg += input;
    output.textContent += input;
}

function clearAll(){
    output.textContent = '';
    firstArg= '';
    operator='';
    secondArg='';
    eqLine.textContent='';
}

digits.forEach(digit => {
    digit.addEventListener('click', function(){
        if (output.textContent.includes("Answer:") && Number.isInteger(parseFloat(digit.textContent))){
            clearAll();
        }
        if (Number.isInteger(parseFloat(digit.textContent)) || digit.textContent == '.' || digit.textContent == '+/-' || digit.textContent == 'back' || digit.textContent == '%'){
            if(operator == '')
            {
                firstArgOps(digit.textContent);
            }
            else if (firstArg != '' && operator != ''){
                secondArgOps(digit.textContent)
            }
        }
        else if(!Number.isInteger(parseFloat(digit.textContent)) && digit.textContent != 'enter' && operator == ''){
            operator = digit.textContent;
            console.log(operator);
            output.textContent = '';
        }
    });
});

const enter = document.querySelector('#enter');
enter.addEventListener('click', function(){
    console.log('bop');
    if(secondArg == ''){
        output.textContent = firstArg;
    }
    else{
        console.log(`first:${firstArg} second:${secondArg} ${operator}`);
        output.textContent = (`Answer: ${operate(operator, parseFloat(firstArg), parseFloat(secondArg))}`);
        eqLine.textContent = (`${firstArg} ${operator} ${secondArg} =`);
        firstArg = operate(operator, parseFloat(firstArg), parseFloat(secondArg));
        secondArg = '';
        operator='';
    }
    boundsCheck();
});

const operations = document.querySelectorAll('.operation');
operations.forEach(operation =>{
        operation.addEventListener('click', function(){
        console.log('yep');
        if (firstArg != '' && secondArg != ''){
            output.textContent = '';
            console.log('yeo');
            output.textContent = (`${operate(operator, parseFloat(firstArg), parseFloat(secondArg))}`);
            eqLine.textContent = (`${firstArg} ${operator} ${secondArg} =`);
            firstArg = operate(operator, parseFloat(firstArg), parseFloat(secondArg));
            secondArg = '';
            operator = operation.textContent;

        }
    });
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', function(){
    clearAll();
});


window.onkeydown = function(e){
    let x = e.key;
    let choice
    switch(x){
        case '1':
            choice = document.querySelector('#one');
            choice.click();
            break;
        case '2':
            choice = document.querySelector('#two');
            choice.click();
            break;
        case '3':
            choice = document.querySelector('#three');
            choice.click();
            break;
        case'4':
            choice = document.querySelector('#four');
            choice.click();
            break;
        case '5':
            choice = document.querySelector('#five');
            choice.click();
            break;
        case '6':
            choice = document.querySelector('#six');
            choice.click();
            break;
        case '7':
            choice = document.querySelector('#seven');
            choice.click();
            break;
        case '8':
            choice = document.querySelector('#eight');
            choice.click();
            break;
        case '9':
            choice = document.querySelector('#nine');
            choice.click();
            break;
        case '0':
            choice = document.querySelector('#zero');
            choice.click();
            break;
        case 'Escape':
            choice = document.querySelector('#clear');
            choice.click();
            break;
        case 'Backspace':
            choice = document.querySelector('#backspace');
            choice.click();
            break;
        case '^':
            choice = document.querySelector('#exp');
            choice.click();
            break;
        case '/':
            choice = document.querySelector('#divide');
            choice.click();
            break;
        case '*':
            choice = document.querySelector('#multiply');
            choice.click();
            break;
        case '-':
            choice = document.querySelector('#subtract');
            choice.click();
            break;
        case '+':
            choice = document.querySelector('#add');
            choice.click();
            break;
        case '.':
            choice = document.querySelector('#decimal');
            choice.click();
            break;
        case 'Enter':
            choice = document.querySelector('#enter');
            choice.click();
            break;
        case '|':
            choice = document.querySelector('#plus-minus');
            choice.click();
            break;
        case '%':
            choice = document.querySelector('#mod');
            choice.click();
            break;
    }
}

function switchColor(){
    let element = document.body;
    element.classList.toggle("dark");
}