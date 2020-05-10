
document.addEventListener("DOMContentLoaded",function (){

    // Get All element needed for the resume
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

    //regex to get url of image
    const regexGetUrl = /(\/image(.*))\w+/g
    
    //observer watch if an attribute in img tag as changed
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type == "attributes") {
          var regex = image.src.match(regexGetUrl)
          //if regex == null, it means that the image come from users files and not example image, so the source is valid
          if(regex == null){
            placeholderImage.setAttribute("src", image.src);
          }
          else{
            placeholderImage.setAttribute("src", regex[0]);
          }
          placeholderImage.style.display ="block"
        }
      });
    });

    observer.observe(image, {
      attributes: true,
    });

    //just copy content if something as been changed
    name.addEventListener("input", function(){
      placeholderName.textContent = name.value
    })

    //just copy content if something as been changed
    lore.addEventListener("input", function(){
      placeholderLore.textContent = lore.value
    })

    //get the current displayed class on next click event
    next.addEventListener('click', function(){
      firstCarousselElement = document.querySelector('.slider');
      setTimeout(function(){ 
        placeholderClass.textContent = firstCarousselElement.children[0].children[0].children[0].textContent
      }, 500)
    });

     //get the current displayed class on previous click event
    prev.addEventListener('click', function(){
      firstCarousselElement = document.querySelector('.slider');
      var nb = firstCarousselElement.childElementCount-1;
      setTimeout(function(){ 
        placeholderClass.textContent = firstCarousselElement.children[nb].children[0].children[0].textContent
      }, 500)
    });
})