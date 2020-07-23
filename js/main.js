$(document).ready(function() {
    var toggleButton = $('.nav__toggle');
    var toggleBlock = $('.nav__list');

    toggleButton.on('click', function() {
        toggleButton.toggleClass('toggleMenu');
        toggleBlock.toggle();
    });
});