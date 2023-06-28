$(document).ready(function() {
    "use strict";

    // header fix

    // $(window).scroll(function() {
    //     var sticky = $('.header'),
    //         scroll = $(window).scrollTop();

    //     if (scroll >= 40) {
    //         sticky.addClass('fixed');
    //     } else {
    //         sticky.removeClass('fixed');

    //     }
    // });

    $('.gallery-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
    })


    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        callbacks: {
            beforeOpen: function() {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    // IMG to SVG 

    // jQuery('img').filter(function() {
    //     return this.src.match(/.*\.svg$/);
    // }).each(function() {
    //     var $img = jQuery(this);
    //     var imgID = $img.attr('id');
    //     var imgClass = $img.attr('class');
    //     var imgURL = $img.attr('src');

    //     jQuery.get(imgURL, function(data) {
    //         // Get the SVG tag, ignore the rest
    //         var $svg = jQuery(data).find('svg');

    //         // Add replaced image's ID to the new SVG
    //         if (typeof imgID !== 'undefined') {
    //             $svg = $svg.attr('id', imgID);
    //         }
    //         // Add replaced image's classes to the new SVG
    //         if (typeof imgClass !== 'undefined') {
    //             $svg = $svg.attr('class', imgClass + ' replaced-svg');
    //         }

    //         // Remove any invalid XML tags as per http://validator.w3.org
    //         $svg = $svg.removeAttr('xmlns:a');

    //         // Replace image with new SVG
    //         $img.replaceWith($svg);

    //     }, 'xml');

    // });



    // background section 

    $('[data-bg-image]').each(function() {
        var $this = $(this),
            $image = $this.data('bg-image');
        $this.css('background-image', 'url(' + $image + ')');
    });
    $('[data-bg-color]').each(function() {
        var $this = $(this),
            $color = $this.data('bg-color');
        $this.css('background-color', $color);
    });

    $('.bg-img').each(function() {
        var imgSrc = $(this).children('img').attr('src');
        $(this).parent().css({
            'background-image': 'url(' + imgSrc + ')',
            'background-size': 'cover',
            'background-position': 'center',
        });
        $(this).parent().addClass('bg-img');
        if ($(this).hasClass('background-size-auto')) {
            $(this).parent().addClass('background-size-auto');
        }
        $(this).remove();
    });


});