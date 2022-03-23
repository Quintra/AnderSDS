$(document).ready(function(){
    $(window).scroll(function(){
            if(this.scrollY > 20){
                $('.navbar').addClass("sticky");
            }else{
                $('.navbar').removeClass("sticky");
            }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
});
$('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
     $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
     });

    var typed = new Typed(".typing", {
    strings:["Meu nome é"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
    });
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })
});
     /*-------mudar cor-------

    $(window).scroll(function() { 
    var scroll = $(window).scrollTop();

    if (scroll > 600) {
        $('.navbar .logo a').css('color','blueviolet');
    }else{
        $('.navbar .logo a').css('color','#0B2FC3');
    }

    if (scroll > 600) {
        $('.navbar .logo a span').css('color','#0B2FC3');
    }else{
        $('.navbar .logo a span').css('color','blueviolet');
    }
    });

         ----mudar cor-------*/