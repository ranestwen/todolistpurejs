function zoomGallery() {
    document.getElementById("main").addEventListener("click", function () {
        var zoom = document.querySelectorAll('.zoom');

        var lightbox = document.getElementById("lightbox");

        zoom.forEach((el) => {
            el.addEventListener('click', zoomIn);
        })

        function zoomIn(event) {

            const zoom = event.target || event.srcElement;
            const p = zoom.children.item(0);


            lightbox.classList.add('lightbox__show');
            document.getElementById("lightbox__string").innerHTML = zoom.innerHTML;
            // when accept was clicked
            document.getElementById("btn__accept").addEventListener("click", function () {
                // get the content from text area
                let string = document.getElementById("lightbox__string").value;
                // if empty show alertt
                if (string == "") {
                    alert('Textarea is empty :(');
                } else {
                    zoom.innerHTML = string;
                }


            });
            // when deny was clicked
            document.getElementById("btn__deny").addEventListener("click", function () {
                lightbox.classList.remove('lightbox__show');
            });
        };


        lightbox.onclick = function () {
            lightbox.classList.remove('block');

            let x = document.getElementsByClassName("zoom__active");

            if (x.length > 0) {
                // Removing a class with VanillaJS
                x[0].classList.remove("zoom__active");
            }

        }
    });
}