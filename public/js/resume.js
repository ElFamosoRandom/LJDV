
document.addEventListener("DOMContentLoaded",function (){

    const placeholderImage = document.getElementById("placeholder-image-step-four").children[0];
    const image = document.getElementById("photo-custom-step-three").children[0];
    const placeholderName = document.getElementById("placeholder-name-step-four").children[1];
    const name = document.getElementById("name-step-two")
    const placeholderLore = document.getElementById("placeholder-description-step-four").children[1];
    const lore = document.getElementById("text-area-step-two")
    
    const prev = document.getElementById("arrow-left");
    const next = document.getElementById("arrow-right");
    const placeholderClass = document.getElementById("placeholder-class-step-four").children[1];

    var firstCarousselElement; 

    const regexGetUrl = /(\/image(.*))\w+/g
    var config = { attributes: true, childList: true };

    /*setTimeout(function() {
        image.setAttribute('data-text', 'whatever');
      }, 5000)*/

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type == "attributes") {
          var regex = image.src.match(regexGetUrl)
          console.log(regex)
          if(regex == null){
            placeholderImage.setAttribute("src", image.src);
          }
          else{
            console.log(regex[0])
            placeholderImage.setAttribute("src", regex[0]);
          }
          placeholderImage.style.display ="block"
          /*if(placeholderImage.children.length > 1){
            placeholderImage.children[0].remove();
          }*/
        }
      });
    });

    observer.observe(image, {
      attributes: true,
    });

    name.addEventListener("input", function(){
      placeholderName.textContent = name.value
    })

    lore.addEventListener("input", function(){
      placeholderLore.textContent = lore.value
    })

    next.addEventListener('click', function(){
      firstCarousselElement = document.querySelector('.slider');
      setTimeout(function(){ 
        console.log(firstCarousselElement.children[0].children[0].children[0].textContent);
        placeholderClass.textContent = firstCarousselElement.children[0].children[0].children[0].textContent
      }, 500)
    });

    prev.addEventListener('click', function(){
      firstCarousselElement = document.querySelector('.slider');
      var nb = firstCarousselElement.childElementCount-1;
      console.log(nb);
      setTimeout(function(){ 
        console.log(firstCarousselElement.children[nb].children[0].children[0].textContent);
        placeholderClass.textContent = firstCarousselElement.children[nb].children[0].children[0].textContent
      }, 500)
      /*console.log(firstCarousselElement.childElementCount-1)
      console.log(firstCarousselElement.children[3]);*/
    });
    /*name.addEventListener("input", function(){
      placeholderName.textContent = name.value
    })*/

    

    /*console.log(image);
    image.addEventListener("change",function(){
        console.log(image);
    });*/

})