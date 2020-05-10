document.addEventListener("DOMContentLoaded",function (){

    //get the elements needed for the photos
    const photos = document.querySelectorAll(".photo")
    const regexGetUrl = /(\/image(.*))\w+/g
    const divPhoto = document.getElementById("photo-custom-step-three").children[0];
    const fileInput = document.getElementById("custom-photo-input-step-three");
    
    //check all photos from example photo, check the one you click, take the src displayed, and put it in the "selected" display
    for (var i = 0; i < photos.length; i++) {
        photos[i].id = "phot" + i
        photos[i].addEventListener('click', function(){
            var selected_photo = document.getElementById(this.id).children
            var src = selected_photo[0].src
            var regex = src.match(regexGetUrl);
            divPhoto.setAttribute("src",regex[0]);
            divPhoto.style.display ="block"
        });
    }

    //if user take photos from his computer, read the file, take the src, and put it in the "selected" display
    fileInput.addEventListener("change", function(){
        const file = this.files[0];
        if(file){
            const reader = new FileReader();
            reader.addEventListener("load", function(){
                divPhoto.setAttribute("src", this.result);
                divPhoto.style.display ="block"
            });
            reader.readAsDataURL(file);
        }
    });
})