function addEntry() {

    document.getElementById("btn__add").addEventListener("click", function () {
        let string = document.getElementById("elo").value;
        console.log(string);
        if (string == "") {
            alert('Textarea is empty :(');
        } else {
            let d1 = document.getElementById('box__grid');
            d1.insertAdjacentHTML('afterbegin', '<div class="zoom">' + string + '</div>');
            alert('poszlo!');
        }
    });
}