function changeColor(element) {
    var items = document.querySelectorAll('.nav-menu .item');
    items.forEach(function(item) {
        item.classList.remove('active');
    });

    element.parentElement.classList.add('active');
}
