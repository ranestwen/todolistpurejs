function zoomGallery() {
    var zoom = document.querySelectorAll('.zoom');

    var lightbox = document.getElementById("lightbox");
 
    zoom.forEach((el) => {
        el.addEventListener('click', zoomIn);
    })

   
    function zoomIn(event) {
        event.target.classList.add('zoom__active');
        lightbox.classList.add('block');
    };


    lightbox.onclick = function(){
        lightbox.classList.remove('block');

        let x = document.getElementsByClassName("zoom__active");

        if(x.length > 0){
            // Removing a class with VanillaJS
            x[0].classList.remove("zoom__active");
        }

    }
};

