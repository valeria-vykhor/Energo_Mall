//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/bootstrap/dist/js/bootstrap.js
//= partials/wow.min.js

$(document).ready( function() {
    if ($('body').width() >= 752) {
        new WOW().init();
    }

    $("a.scroll-to").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, 
        {  
            duration: 800,
            easing: "swing"
        });
        return false;
    });

    if ($('body').width() <= 560) {

        var orderOne = $("[data-order='1']").attr("src");
        var orderTwo = $("[data-order='2']").attr("src");
        var orderThree = $("[data-order='3']").attr("src");
        var orderFive = $("[data-order='5']").attr("src");
        var orderSeven = $("[data-order='7']").attr("src");
        var orderEight = $("[data-order='8']").attr("src");
        var orderNine = $("[data-order='9']").attr("src");

        $("[data-order='8']").attr('src', orderOne);
        $("[data-order='5']").attr('src', orderTwo);
        $("[data-order='2']").attr('src', orderThree);
        $("[data-order='9']").attr('src', orderFive);
        $("[data-order='3']").attr('src', orderSeven);
        $("[data-order='7']").attr('src', orderEight);
        $("[data-order='1']").attr('src', orderNine);
    }
});