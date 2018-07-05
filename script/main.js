jQuery(function($) {
    $('.arrow').click(function() {
        $.scrollTo($("#container"), 500);
    });
});

$(document).ready(function() {
    $(window).scroll(function() {
        var NavY = $('#container').offset().top;
        var ScrollY = $(window).scrollTop();

        if (ScrollY > NavY) {
            $('.quote-container').addClass('sticky');
        } else {
            $('.quote-container').removeClass('sticky');
        }

        document.getElementById("banner").style.top = -ScrollY/5 + "px";
    });
});

(function() { /* Opening/closing navigation */
    var quoteButton = $('.menu-btn'),
        navv = document.getElementById('mainNav');

    quoteButton.on('click', function(e) {
        e.preventDefault();

        $('.quote-container').toggleClass('opened-nav');

        var menuBtn = $('.menu-btn'),
            menuBtnBlock = menuBtn.find('.menu-btn-block');

        menuBtnBlock.toggleClass('active');
    });
})();