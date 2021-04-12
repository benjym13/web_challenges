var num = document.querySelector('.number')
var value = 1; 
function aumentar() { 
    num.innerHTML = value++;
}
function reducir() {
    num.innerHTML = value--;
}
