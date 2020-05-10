document.addEventListener("DOMContentLoaded",function (){

    //get element needed for the carousel
    const slider = document.querySelector('.slider');
    const carousel = document.querySelector('.carousel')
    const prev = document.getElementById("arrow-left");
    const next = document.getElementById("arrow-right");

    //any amount of starting class possible, so need to count number of child to add a screen width for every element
    const childnumber = document.querySelector('.slider').childElementCount;
    slider.style.width = childnumber*100 + '%'

    var direction = -1;

    //click event on prev element verify if direction is -1 so that 
    //the first element is placed at the end, and set the direction to 1 (left to right tranlation)
    prev.addEventListener('click', function(){
        if(direction == -1){
            slider.appendChild(slider.firstElementChild)
            direction = 1;
        }
        carousel.style.justifyContent = 'flex-end'
        slider.style.transform = 'translate('+ 100/childnumber + '%)';
    });

    //click event on next element set the direction to -1 (right, to left translation)
    next.addEventListener('click', function(){
        direction = -1
        carousel.style.justifyContent = 'flex-start'
        slider.style.transform = 'translate(-'+ 100/childnumber + '%)';
    });

    //let the slider do its animation so that it doesn't bug
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