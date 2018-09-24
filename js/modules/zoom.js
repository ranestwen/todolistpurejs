function zoomGallery() {
    var zoom = document.querySelectorAll('.zoom');

    zoom.forEach((el) => {
        el.addEventListener('click', function handleClick(event) {
            event.target.classList.add('active')
            el.removeEventListener('click', handleClick);
        });
});

};