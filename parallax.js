$(document).ready(function(){

    $(window).scroll(function(){

        var windowWidth = $(window).width();
        if(windowWidth > 800){
            var scroll = $(window).scrollTop();
            $('header .texto').css({
                'transform': 'translate(0px,'+ scroll / 5 + '%)'
            });

            $('.acerca-de article').css({
                'transform': 'translate(0px,'+ (scroll / 7)*-1 + '%)'
            });
        }
    });
//seguridad para cambios de pantallas
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 800){
            $('.acerca-de article').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    });

});