$(function() {

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

        checkScroll (scrollOffset);

    /* Fixed header */
    $(window).on("scroll", function ()  {
        scrollOffset = $(this).scrollTop();

        checkScroll (scrollOffset);

    })
        
    function checkScroll(scrollOffset) {
        

        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    };

    /* Smooth Scroll*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var blockId =  $(this).data("scroll"),
        blockoffset = $(blockId).offset().top;

        $("html, body").animate ({
            scrollTop: blockoffset
        }, 500)
    })
       
/* menu nav-toggle*/

    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $("nav__link").toggleClass("active")
    })
    

    

});
