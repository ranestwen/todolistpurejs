function showTasks() {
    tasks.reverse().forEach(function (element) {
        let d1 = document.getElementById('box__grid');
        d1.insertAdjacentHTML('afterbegin', '<div class="zoom">' + element + '</div>');
    });
}