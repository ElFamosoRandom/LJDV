document.addEventListener("DOMContentLoaded",function (){

    const slider = document.querySelector('.slider');
    const carousel = document.querySelector('.carousel')

    const prev = document.getElementById("arrow-left");
    const next = document.getElementById("arrow-right");

    const firstPage = document.getElementById("main-page-step-one")
    const buttonFirstPage = document.getElementById("button-class-step-one")

    const childnumber = document.querySelector('.slider').childElementCount;

    slider.style.width = childnumber*100 + '%'
    var direction = -1;

    
    prev.addEventListener('click', function(){
        if(direction == -1){
            slider.appendChild(slider.firstElementChild)
            direction = 1;
        }
        carousel.style.justifyContent = 'flex-end'
        slider.style.transform = 'translate('+ 100/childnumber + '%)';
    });

    next.addEventListener('click', function(){
        direction = -1
        carousel.style.justifyContent = 'flex-start'
        slider.style.transform = 'translate(-'+ 100/childnumber + '%)';
    });

    slider.addEventListener('transitionend',function(){

        if(direction == -1){
            slider.appendChild(slider.firstElementChild)
        } else if (direction == 1){
            slider.prepend(slider.lastElementChild);
        }

        slider.style.transition = 'none';
        slider.style.transform = 'translate(0)';
        setTimeout(function(){
            slider.style.transition = 'all 0.3s';
        })
    })
})