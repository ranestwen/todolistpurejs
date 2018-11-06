function ShowButtons() {
    let input = document.getElementById('elo');
    let btn__add = document.getElementById("btn__add");
    let btn__remove = document.getElementById("btn__remove");


    input.onclick = function() {
        btn__add.classList.add("show");
        btn__remove.classList.add("show");
    };

    addEntry();
};

