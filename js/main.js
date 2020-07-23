$(document).ready(function() {
    //#### The toggle func
    var toggleButton = $('.nav__toggle');
    var toggleBlock = $('.nav__list');

    toggleButton.on('click', function() {
        toggleButton.toggleClass('toggleMenu');
        toggleBlock.toggle();
    });

    //#### The mouse massage
    var $body = $('body');
    var offsetBody = $.extend($body.offset(), {
        width : $body.outerWidth(),
        height : $body.outerHeight()
    });
    var $target = $('.swiper-wrapper');
    var offsetTarget = $.extend($target.offset(), {
        width : $target.outerWidth(),
        height : $target.outerHeight()
    });

    $('body').mousemove(function(e) {
        var x = e.pageX;
        var y = e.pageY;
    
        if ((x >= offsetBody.left && x <= offsetBody.left + offsetBody.width) && (y >= offsetBody.top && y <= offsetBody.top + offsetBody.height)) {
            $('#mouse').css('left', x+'px').css('top', y+'px');
        }
        if ((x >= offsetTarget.left && x <= offsetTarget.left + offsetTarget.width) && (y >= offsetTarget.top && y <= offsetTarget.top + offsetTarget.height)) {
            $('#mouseMessage').css('left', (x+35)+'px').css('top', (y-10)+'px').css('opacity', '1').css('transition', '1s opacity ease-in-out');
        }
    });
    $target.mouseleave(function() {
        $('#mouseMessage').css('opacity', '0').css('transition', '.5s opacity ease-in-out');
    }); 
});