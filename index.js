let counter = 0;

let counterDOM = document.getElementById('counter');
let increaseDOM = document.getElementById('increase');
let decreaseDOM = document.getElementById('decrease');

counterDOM.innerHTML = counter;

increaseDOM.addEventListener('click', clickEvent);
decreaseDOM.addEventListener('click', clickEvent);

function clickEvent() {
    if (this.id == 'increase') {
        counterDOM.innerHTML = counter = counter + 1;
    } else if (this.id == 'decrease'){
        counterDOM.innerHTML = counter = counter - 1;
    }
}