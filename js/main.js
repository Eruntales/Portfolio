//menu-hamburger
$(document).ready(function(){
    $(".menu-hamburger").click(function() {

      
        $("nav").fadeToggle();
       
        $(this).toggleClass("is-active");
        
        ($(".header-menu-name").text() === "Menu") ? $(".header-menu-name").text("Close") : $(".header-menu-name").text("Menu");
        
        if ($(window).width() > 414) {
            $('body').toggleClass('nav-overflow');
            
            if ($(".header-menu-name").text() == 'Close') {
                document.addEventListener('touchmove', handleTouchMove, false);
            }
            else {
                document.removeEventListener('touchmove', handleTouchMove);
            }
        }
    });
});


//item-hover effect
$(document).ready(function() {
$('.item').hover(function() {
$(this).siblings().stop().fadeTo(500,0.4);
}, function() {
$(this).siblings().stop().fadeTo(500,1);
});
});
