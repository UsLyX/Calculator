var button = document.querySelector('.button');
var current = document.getElementById('current');
var last = document.getElementById('last');
var arefmetic_operation = document.querySelector('.arefmetic_operation');

function insert(num) {
    current.innerHTML = current.innerHTML + num;
}  

button.onclick = function clear() {
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