const SCALE  = document.querySelector('.scale');
var scaleItem = SCALE.querySelectorAll('.scale_item');
    for ( let i = 0; i  < scaleItem.length; i++) {
        scaleItem[i].addEventListener('click', function selectItem() {
            (document.querySelector('.active')) ? document.querySelector('.active').classList.remove('active') : '';
            this.classList.add('active');
        });
    }
