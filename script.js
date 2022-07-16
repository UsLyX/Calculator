var current = document.getElementById('current');
var last = document.getElementById('last');
var arefmetic_operation = document.querySelector('.arefmetic_operation');
var button_c = document.querySelector('.button_c');
var i = 0;
var number1;
var number2;
var numberWithArefmeticOperation;
var result;

function insert(num) {
    current.innerHTML += num;
    number2 = current.innerHTML.replace(numberWithArefmeticOperation,'');
}  
function error(num){
    if(current.innerHTML[0] === '0'){
        if(current.innerHTML === '0' + num){
            current.innerHTML = 'Ошибка';
        }
    }  
    if(current.innerHTML[0] === '.'){
        current.innerHTML = 'Ошибка';
    }
}
function clear_error(num){
    if(current.innerHTML == 'Ошибка' + num){
        current.innerHTML = current.innerHTML.replace('Ошибка' + num, num);
    }
}

button_c.onclick = function clear() {
    current.innerHTML = '';
} 

function clearAll() {
    current.innerHTML = '';
    last.innerHTML = '';
}   

function back() {
    if(current.innerHTML === 'Ошибка'){
        current.innerHTML = '';
    }
    current.innerHTML = current.innerHTML.substring('0', current.innerHTML.length - 1);
}

function calc() {
    /*if(current.innerHTML === number1 + '^' + number2){
        current.innerHTML = square()
    }*/
    if(current.innerHTML){
        current.innerHTML = numberWithArefmeticOperation + number2 + "=" + eval(current.innerHTML);
    }
    /*if(current.innerHTML === number1 + '+' + number2){
        plus();
    }
    if(current.innerHTML === number1 + '-' + number2){
        min();
    }
        if(current.innerHTML === number1 + '*' + number2){
        mul();
    }
    if(current.innerHTML === number1 + '/' + number2){
        del();
    }*/
    last.innerHTML = current.innerHTML;
}
function arefmetic_operation1(arefmetic_operation) {
    number1 = current.innerHTML.substring('0',current.innerHTML);
    current.innerHTML += arefmetic_operation;
    numberWithArefmeticOperation = current.innerHTML;

    if(current.innerHTML[current.innerHTML.length - 2] === '+' || current.innerHTML[current.innerHTML.length - 2] === '-' ||
    current.innerHTML[current.innerHTML.length - 2] === '*' || current.innerHTML[current.innerHTML.length - 2] === '/')
    {
        current.innerHTML = current.innerHTML.replace(current.innerHTML[current.innerHTML.length - 2], arefmetic_operation);
        current.innerHTML = current.innerHTML.substring('0', current.innerHTML.length - 1);
    }

    if(current.innerHTML === arefmetic_operation && current.innerHTML != '-'){
        current.innerHTML = 'Ошибка';
    }

    if(current.innerHTML == 'Ошибка+' || current.innerHTML == 'Ошибка/' || current.innerHTML == 'Ошибка*' || current.innerHTML == 'Ошибка^' ||
    current.innerHTML == 'Ошибка.'){
        current.innerHTML = current.innerHTML.replace('Ошибка' + arefmetic_operation, 'Ошибка');
    }
}    
/*function square() {
    return number1 + "^" + number2 + "=" + number1 ** number2;
}
function plus(){
    result = Number(number1) + Number(number2);
    current.innerHTML = number1 + "+" + number2 + "=" + result;
}
function min(){
    result = Number(number1) - Number(number2);
    current.innerHTML = number1 + "-" + number2 + "=" + result;
}
function mul(){
    result = Number(number1) * Number(number2);
    current.innerHTML = number1 + "*" + number2 + "=" + result;
}
function del(){
    result = Number(number1) / Number(number2);
    current.innerHTML = number1 + "/" + number2 + "=" + result;
}*/