var current = document.getElementById('current');
var last = document.getElementById('last');
var arefmetic_operation = document.querySelector('.arefmetic_operation');
var button_c = document.querySelector('.button_c');
var i = 0;

function insert(num) {
    current.innerHTML += num;
    if(current.innerHTML[current.innerHTML.length - 2] === '/' || current.innerHTML[current.innerHTML.length - 2] === '*' ||
    current.innerHTML[current.innerHTML.length - 2] === '-' || current.innerHTML[current.innerHTML.length - 2] === '+'){
        if(current.innerHTML[current.innerHTML.length - 1] === '.'){
            current.innerHTML = 'Ошибка';
        }
    }
}  
function error(num){
    while(i <= 1){
        current.innerHTML[i] += num;
        i++;
        if (current.innerHTML[0] == num){
            continue;
        }
        else if(current.innerHTML[1] != '.'){
            current.innerHTML = 'Ошибка';
        }
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
    var number = current.innerHTML;
    if(number){
        current.innerHTML = eval(number);
    }
    last.innerHTML = number + "=" + current.innerHTML;
}
function arefmetic_operation1(arefmetic_operation) {
    current.innerHTML += arefmetic_operation;
    if(current.innerHTML[current.innerHTML.length - 2] === '+' || current.innerHTML[current.innerHTML.length - 2] === '-' ||
    current.innerHTML[current.innerHTML.length - 2] === '*' || current.innerHTML[current.innerHTML.length - 2] === '/')
    {
        current.innerHTML = current.innerHTML.replace(current.innerHTML[current.innerHTML.length - 2], arefmetic_operation);
        current.innerHTML = current.innerHTML.substring('0', current.innerHTML.length - 1);
    }
    if(current.innerHTML === arefmetic_operation && current.innerHTML != '-'){
        current.innerHTML = 'Ошибка';
    }
    if(current.innerHTML == 'Ошибка+' || current.innerHTML == 'Ошибка/' || current.innerHTML == 'Ошибка*' || current.innerHTML == 'Ошибка^2'){
        current.innerHTML = current.innerHTML.replace('Ошибка' + arefmetic_operation, 'Ошибка');
    }
}    
function square() {
    return current.innerHTML * current.innerHTML;
}