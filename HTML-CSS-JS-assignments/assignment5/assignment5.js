function reset() {
    // document.querySelectorAll('p').innerHTML = 0;
    document.querySelector('#left').innerHTML = 0;
    document.querySelector('#right').innerHTML = 0;
}

// function incrementLeft(){
//     document.querySelector('#left').innerHTML = ++document.querySelector('#left').innerHTML;
// }

// function incrementRight(){
//     document.querySelector('#right').innerHTML = ++document.querySelector('#right').innerHTML;
// }

function incrementValue(elementId) {
    document.querySelector(`#${elementId}`).innerHTML = ++document.querySelector(`#${elementId}`).innerHTML
}