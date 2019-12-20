/**
 * Section: jQuery
 */

$(function() {

    //@@include('global/_global.js')
    //@@include('components/_components.js')
    $('.slider-card').slick({
        arrows: false,
        dots: true
    });

    $('.slider').slick({
        arrows: false,
        dots: true
    });
});