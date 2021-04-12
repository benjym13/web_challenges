var initButton = document.querySelector('.button')
initButton.addEventListener('click', init, false );
function init(event) {
    event.preventDefault();
    let welcome = document.querySelector('.welcome');
    let test = document.querySelector('.main');
    welcome.classList.remove('active');
    test.classList.remove('desactive');
}