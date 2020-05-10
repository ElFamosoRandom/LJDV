
document.addEventListener("DOMContentLoaded",function (){

    //get element needed for the carousel
    const slider = document.querySelector('.slid')
    const indicatorParents = document.querySelector('.controls ul');
    const progressBar = document.getElementById('progress-bar-full')

    var sectionIndex = 0;

    //get index of step (0,1,2,3 for 4 steps) and translate the whole view to position
    function setIndex(){
        document.querySelector('.controls .selected').classList.remove('selected');
        slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
    }

    //get every top indicator (circle at the top of the page) and listen if there's any click on it. if so, get the indicator, and translate to next screen
    document.querySelectorAll('.controls li').forEach(function(indicator, ind) {
        indicator.addEventListener('click', function(){
            sectionIndex = ind;
            setIndex();
            indicator.classList.add('selected');
            progressBar.style.width = sectionIndex*25 + '%';
        })
    })

    //only needed for the "suivant" button. Increment index to translate to next screen and add the selected class to indicator
    document.querySelectorAll('.next-button').forEach(function(indicator) {
        indicator.addEventListener('click', function(){
            sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
            setIndex()
            indicatorParents.children[sectionIndex].classList.add('selected');
            progressBar.style.width = sectionIndex*25 + '%';
        });
    })
})