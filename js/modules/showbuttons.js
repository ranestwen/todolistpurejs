function ShowButtons() {
    var input = document.getElementById('elo');
    var showbutton = document.getElementById("btn");


    input.onclick = function() {
        showbutton.classList.add("show");
    };
};

