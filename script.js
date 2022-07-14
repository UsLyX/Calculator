var current = document.getElementById('current');
var last = document.getElementById('last');
var arefmetic_operation = document.querySelector('.arefmetic_operation');
var button_c = document.querySelector('.button_c');
var i = 0;

function insert(num) {
    current.innerHTML += num;
}  
function error(num){
    while(i <= 1){
        current.innerHTML[i] += num;
        console.log(current.innerHTML[0]);
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
    var r = current.innerHTML;
    if(current.innerHTML == 'Ошибка' + num){
        current.innerHTML = r.replace('Ошибка' + num, num);
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
    var number = current.innerHTML;
    current.innerHTML = number.substring('0', current.innerHTML.length - 1);
}

function calc() {
    var number = current.innerHTML;
    if(number){
        current.innerHTML = eval(number);
    }
    last.innerHTML = number + "=" + current.innerHTML;
}
function arefmetic_operation1(arefmetic_operation) {
    var r = current.innerHTML;
    if(current.innerHTML.length === arefmetic_operation){
        current.innerHTML = r.replace(current.innerHTML.length, arefmetic_operation);
   }
}    
var oper = arefmetic_operation;
function zamena(arefmetic_operation) {
    var p = current.innerHTML.length - 1;
    if(current.innerHTML.length - 1 == oper){
        current.innerHTML.substring(p, oper);
    }
}