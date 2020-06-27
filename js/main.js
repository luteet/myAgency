$(function(){

    let btn_for_slick_left = '<button class="slider__arrows slider__arrows--left"><svg class="slider__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 384 448"><title></title><g id="icomoon-ignore"></g><path d="M320 240v-32c0-8.75-7.25-16-16-16h-125.5l47.25-47.25c3-3 4.75-7 4.75-11.25s-1.75-8.25-4.75-11.25l-22.75-22.75c-3-3-7-4.5-11.25-4.5s-8.25 1.5-11.25 4.5l-113.25 113.25c-3 3-4.5 7-4.5 11.25s1.5 8.25 4.5 11.25l113.25 113.25c3 3 7 4.5 11.25 4.5s8.25-1.5 11.25-4.5l22.75-22.75c3-3 4.5-7 4.5-11.25s-1.5-8.25-4.5-11.25l-47.25-47.25h125.5c8.75 0 16-7.25 16-16zM384 224c0 106-86 192-192 192s-192-86-192-192 86-192 192-192 192 86 192 192z"></path></svg></button',
        btn_for_slick_right = '<button class="slider__arrows slider__arrows--right"><svg class="slider__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 384 448"><title></title><g id="icomoon-ignore"></g><path d="M321.25 224c0-4.25-1.5-8.25-4.5-11.25l-113.25-113.25c-3-3-7-4.5-11.25-4.5s-8.25 1.5-11.25 4.5l-22.75 22.75c-3 3-4.5 7-4.5 11.25s1.5 8.25 4.5 11.25l47.25 47.25h-125.5c-8.75 0-16 7.25-16 16v32c0 8.75 7.25 16 16 16h125.5l-47.25 47.25c-3 3-4.75 7-4.75 11.25s1.75 8.25 4.75 11.25l22.75 22.75c3 3 7 4.5 11.25 4.5s8.25-1.5 11.25-4.5l113.25-113.25c3-3 4.5-7 4.5-11.25zM384 224c0 106-86 192-192 192s-192-86-192-192 86-192 192-192 192 86 192 192z"></path></svg></button>';

    $('.team__slider').slick({
        slidesToShow: 3,
        prevArrow: btn_for_slick_left,
        nextArrow: btn_for_slick_right,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
              },
        ]
    });

    $('.reviews__slider').slick({
        prevArrow: btn_for_slick_left,
        nextArrow: btn_for_slick_right,
        adaptiveHeight: true,
        centerMode: true,
        slidesToShow: 2,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                centerMode: false,
                slidesToShow: 1,
              }
            }
            
        ]
    });

    function ThisIsWebP() {
        let def = $.Deferred(), crimg = new Image();
        crimg.onload = function() { def.resolve(); };
        crimg.onerror = function() {def.reject(); };
        crimg.src = "https://simpl.info/webp/cherry.webp";
        return def.promise();
    }

    let image_height = 0,
        image_srcNotWebp;

    
    

    ThisIsWebP().then(function() {
        $.each($('.image-box'), function (index, val) {
            image_height = $(this).height();
        });
    }
    , function() {
        $.each($('.image-box'), function (index, val) {
            image_srcNotWebp = $(this).data('notwebp');
            $(this).css('background-image', 'url("' + image_srcNotWebp + '")');
        });
        
    });

    let phone_btn = $('.header__top--contact'),
        menu = $('.menu');
        menu_list = $('.menu__list'),
        burger = $('.menu__burger'),
        header_top = $('.header__top--inner'),
        phone_btn_check = false;

        function screenSize(){
            if($(window).width() <= 768 && phone_btn_check == false) {
                phone_btn_check = true;
                $(phone_btn).appendTo($(menu_list));
                $(menu).css('display', 'none');
                $(burger).removeClass('active');
            }
            else if($(window).width() > 768 && phone_btn_check == true){
                phone_btn_check = false;
                $(phone_btn).appendTo($(header_top));
                $(menu).css('display', 'block');
            }
        }
        screenSize()

    $(window).resize(function() {
        screenSize()
    });
    
    $(burger).on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('active');
        $('body').toggleClass('lock');
        $(menu).addClass('active').slideToggle(300);
    });
    
    let quest_btn = $('.quest__list--li'),
        quest_text = $('.quest__list--content');

        $(quest_btn).on('click', function() {
            
            if ($(this).hasClass('active')) {
                $(this).removeClass('active').find(quest_text).slideUp();
            }
            else {
                $(quest_text).slideUp();
                $(quest_btn).removeClass('active');
                $(this).addClass('active').find(quest_text).slideDown();
            }
            
        });

        $('body').on('click', function() {
            if(!$(this) == $(quest_btn)) {
                console.log(0);
            }
        });
});