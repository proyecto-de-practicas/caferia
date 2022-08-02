$(document).ready(function(){
//efecto menu
    $('header .contenedor .menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top: '0'
        }, 1500 + (index * 500));
    });
//efecto header
    if($(window).width() > 800){
        $('header .texto').css({
            opacity:0,
            marginTop:0
        });
        
        $('header .texto').animate({
            opacity:1,
            marginTop:'-52px'
        },1700);
    }

    //elemento del menu
    var acercaDe = $('#acerca-de').offset().top;
    var bthMenu = $('#platillos').offset().top;
    var bthGaleria = $('#galeria').offset().top;
    var bthUbicacio = $('#ubicacion').offset().top;

    $('#bth-acerca-de').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acercaDe
        },500);
    });
    $('#bth-menu').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: bthMenu
        },500);
    });
    $('#bth-galeria').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: bthGaleria
        },500);
    });
    $('#bth-ubicacion').on('click',function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: bthUbicacio
        },500);
    });

   //


});