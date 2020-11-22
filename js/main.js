$(document).ready(function(){ 
    $('.image-container img').attr('data-fancybox','gallery');
 
     
    $('.image-container img').fancybox({
         loop : true
     });



     /*----------Header boxshadow---------*/
     $(window).scroll(function() {     
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".header-container").addClass("box-shadow");
        }
        else {
            $(".header-container").removeClass("box-shadow");
        }
    });


})