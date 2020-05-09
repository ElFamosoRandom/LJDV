
document.addEventListener("DOMContentLoaded",function (){

    const slider = document.querySelector('.slid')

    const leftArrow = document.querySelector('.left')
    const rightArrow = document.querySelector('.right')
    const indicatorParents = document.querySelector('.controls ul');
    const progressBar = document.getElementById('progress-bar-full')

    var sectionIndex = 0;

    function setIndex(){
        document.querySelector('.controls .selected').classList.remove('selected');
        slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
    }

    document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
        indicator.addEventListener('click', function(){
            sectionIndex = ind;
            setIndex();
            indicator.classList.add('selected');
            progressBar.style.width = sectionIndex*25 + '%';
        })
    })

    document.querySelectorAll('.next-button').forEach(function(indicator) {
        indicator.addEventListener('click', function(){
            sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
            setIndex()
            indicatorParents.children[sectionIndex].classList.add('selected');
            progressBar.style.width = sectionIndex*25 + '%';
        });
    })


    /*leftArrow.addEventListener('click', function(){
        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
        setIndex()
        indicatorParents.children[sectionIndex].classList.add('selected');
    });

    rightArrow.addEventListener('click', function(){
        sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
        setIndex()
        indicatorParents.children[sectionIndex].classList.add('selected');
    });*/
})