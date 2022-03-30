
$(function () {

    let header = $("#header");

    //переменная для высоты блока Intro
    let introH = $("#intro").innerHeight();

    //переменная текущий скрол пикселей
    let scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    /*Fixed header*/
    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });


    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            //выдать класс fixed
            header.addClass("fixed");
        } else {
            //иначе забрать класс fixed
            header.removeClass("fixed");
        };
    }



    /*Smooth scroll*/

    //скрол по якорям
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

    let blockId = $(this).data("scroll"),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop: blockOffset
    }, 500);
    })
    
});
