$(function () {

    let btn_for_slick_left = '<button class="slider__arrows slider__arrows--left"><svg class="slider__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 384 448"><title></title><g id="icomoon-ignore"></g><path d="M320 240v-32c0-8.75-7.25-16-16-16h-125.5l47.25-47.25c3-3 4.75-7 4.75-11.25s-1.75-8.25-4.75-11.25l-22.75-22.75c-3-3-7-4.5-11.25-4.5s-8.25 1.5-11.25 4.5l-113.25 113.25c-3 3-4.5 7-4.5 11.25s1.5 8.25 4.5 11.25l113.25 113.25c3 3 7 4.5 11.25 4.5s8.25-1.5 11.25-4.5l22.75-22.75c3-3 4.5-7 4.5-11.25s-1.5-8.25-4.5-11.25l-47.25-47.25h125.5c8.75 0 16-7.25 16-16zM384 224c0 106-86 192-192 192s-192-86-192-192 86-192 192-192 192 86 192 192z"></path></svg></button',
        btn_for_slick_right = '<button class="slider__arrows slider__arrows--right"><svg class="slider__icon" version="1.1" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 384 448"><title></title><g id="icomoon-ignore"></g><path d="M321.25 224c0-4.25-1.5-8.25-4.5-11.25l-113.25-113.25c-3-3-7-4.5-11.25-4.5s-8.25 1.5-11.25 4.5l-22.75 22.75c-3 3-4.5 7-4.5 11.25s1.5 8.25 4.5 11.25l47.25 47.25h-125.5c-8.75 0-16 7.25-16 16v32c0 8.75 7.25 16 16 16h125.5l-47.25 47.25c-3 3-4.75 7-4.75 11.25s1.75 8.25 4.75 11.25l22.75 22.75c3 3 7 4.5 11.25 4.5s8.25-1.5 11.25-4.5l113.25-113.25c3-3 4.5-7 4.5-11.25zM384 224c0 106-86 192-192 192s-192-86-192-192 86-192 192-192 192 86 192 192z"></path></svg></button>';

    /* $('.team__list').slick({
        slidesToShow: 3,
        prevArrow: btn_for_slick_left,
        nextArrow: btn_for_slick_right,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                }
              },
        ]
    }); */

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
        crimg.onload = function () { def.resolve(); };
        crimg.onerror = function () { def.reject(); };
        crimg.src = "https://simpl.info/webp/cherry.webp";
        return def.promise();
    }

    let image_height = 0,
        image_srcNotWebp,
        image_src = '.webp-bg';




    ThisIsWebP().then(function () {
        $.each($(image_src), function () {
        });
    }
        , function () {
            $.each($(image_src), function () {
                image_srcNotWebp = $(this).data('notwebp');
                $(this).css('background-image', 'url("' + image_srcNotWebp + '")');

            });

        });

    let phone_btn = $('.header__top--contact'),
        menu = $('.menu');
        menu_list = $('.menu__list'),
        burger = $('.menu__burger'),
        header_top = $('.header__top--inner'),
        phone_btn_check = false,
        menu_btn = $('.btn-scroll'),
        btn_up = $('.btn-up'),
        start_scroll = false;

    $(phone_btn).css('display', 'block');

    function screenSize() {
        if ($(window).width() <= 768 && phone_btn_check == false) {
            phone_btn_check = true;
            $(phone_btn).appendTo($(menu_list)).css('display', 'block');
            $(menu).css('display', 'none');
            $(burger).removeClass('active');

        }
        else if ($(window).width() > 768 && phone_btn_check == true) {
            phone_btn_check = false;
            $(phone_btn).appendTo($(header_top)).css('display', 'block');;
            $(menu).css('display', 'block');
        }
    }
    screenSize()

    $(window).resize(function () {
        screenSize()
    });

    $(burger).on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        if($(this).hasClass('active') && $(window).scrollTop() >= 100) {
            $(btn_up).hide();
        }
        else if(!$(this).hasClass('active') && $(window).scrollTop() >= 100) {
            $(btn_up).show();
        }
        $('body').toggleClass('lock');
        $(menu).addClass('active').slideToggle(300);
    });

    let quest_btn = $('.quest__list--li'),
        quest_text = $('.quest__list--content');

    $(quest_btn).on('click', function () {

        if ($(this).hasClass('active')) {
            $(this).removeClass('active').find(quest_text).slideUp();
        }
        else {
            $(quest_text).slideUp();
            $(quest_btn).removeClass('active');
            $(this).addClass('active').find(quest_text).slideDown();
        }

    });

    $('body').on('click', function () {
        if (!$(this) == $(quest_btn)) {
        }
    });

    function headerHider(settings) {

        if (settings == undefined) {
            return false;
        }

        if (settings.elemName == undefined) {
            return false;
        }

        if (settings.distance == undefined) {
            settings.distance = 500;
        }

        if (settings.fade == undefined) {
            settings.fade = false;
        }

        if (settings.speedAnim == undefined) {
            settings.speedAnim = 200;
        }

        let header = settings.elemName,
            btn_up = $('.btn-up'),
            scrollPrev = 0,
            scrollDown = 0,
            scrollDownCheck = false,
            scrollTop = 0,
            scrollTopCheck = false,
            scrollToTop = false,
            scrollToDown = false,
            fadeInCheck = true,
            fadeOutCheck = false,
            autoHideCheck = false;

        if ($(window).scrollTop() == 0) {
            $(btn_up).fadeOut();
            fadeOutCheck = true;
            setTimeout(function () {
            }, 1000);
        }

        function autoHideBtn(elem) {
            if (autoHideCheck == false) {
                $(elem).fadeTo(400, .8);
                console.log('auto');
                setTimeout(function () {
                    $(elem).fadeTo(400, 0.3);
                    autoHideCheck = false;
                }, 2500);
            }
        }
        
        $(window).scroll(function () {
            let scrolled = $(window).scrollTop();

            if (scrolled == 0) {
                if (settings.classCheck == undefined) {
                    if (settings.fade == true) {
                        $(header).fadeIn(settings.speedAnim);
                    }
                    else if (settings.fade == false) {
                        $(header).slideDown(settings.speedAnim);
                    }
                }
                else {
                    $(header).removeClass(setting.classCheck);
                }
                scrollTopCheck = true;
            }
            
            if (scrolled > 100 && fadeInCheck == true) {
                $(btn_up).fadeTo(400, .3);
                fadeInCheck = false;
                setTimeout(function () {
                    fadeOutCheck = false;
                }, 1000);
            }
            if (scrolled < 100 && fadeOutCheck == false || scrolled == 0) {
                $(btn_up).fadeOut();
                fadeOutCheck = true;
                setTimeout(function () {
                    fadeInCheck = true;
                }, 1000);
            }
            /* if ( scrolled > 100 ) {
                autoHideBtn(btn_up);
                autoHideCheck = true;   
            } */
            
            if (scrolled > 100 && scrolled > scrollPrev) {
                if (scrollToDown == false) {
                    scrollToTop = false;
                    scrollDown = scrolled + settings.distance;
                    scrollDownCheck = false;
                }
                scrollToDown = true;
            } else {
                if (scrollToTop == false) {
                    scrollToDown = false;
                    scrollTop = scrolled - settings.distance;
                    scrollTopCheck = false;
                }
                scrollToTop = true;
            }
            scrollPrev = scrolled;
            if (scrolled >= scrollDown && scrollDownCheck == false) {
                if (settings.classCheck == undefined) {
                    if (settings.fade == true) {
                        $(header).fadeOut(settings.speedAnim);
                    }
                    else if (settings.fade == false) {
                        $(header).slideUp(settings.speedAnim);
                    }
                }
                else {
                    $(header).addClass(settings.classCheck);
                }
                scrollDownCheck = true;
            }
            if (scrollTop >= scrolled && scrollTopCheck == false) {
                if (settings.classCheck == undefined) {
                    if (settings.fade == true) {
                        $(header).fadeIn(settings.speedAnim);
                    }
                    else if (settings.fade == false) {
                        $(header).slideDown(settings.speedAnim);
                    }
                }
                else {
                    $(header).removeClass(settings.classCheck);
                }
                scrollTopCheck = true;
            }
        });
    }

    headerHider({
        elemName: $('.header__top'),
        distance: 400,
    });

    function formCustomer(formSetting) {

        let placeholder,
            elemLength = 0,
            i = 1;


        if (formSetting.elemName == undefined) {
            return false;
        }

        elemLength = formSetting.elemName;



        if (formSetting.keySwitch == true) {
            $(formSetting.elemName).on('keydown', function (e) {
                let keyKod = e.which,
                    nextElem = $(this).next(formSetting.elemName);
                prevElem = $(this).prev(formSetting.elemName);
                if (keyKod == 40) {
                    $(nextElem).focus();
                }
                if (keyKod == 38) {

                    $(prevElem).focus();
                }

            });
        }

        if (formSetting.tabindex == true) {
            $.each($(formSetting.elemName), function () {
                $(this).attr('tabindex') = i;
                i++;
            });
        }

        if (formSetting.customPlace == true) {

            $.each($(formSetting.elemName), function () {
                if (!$(this).data('placeholder')) {
                    return false;
                }
                placeholder = $(this).data('placeholder');
                $(this).attr('placeholder', placeholder);
            });

            $(formSetting.elemName).focus(function () {
                $(this).attr('placeholder', '');
            });

            $(formSetting.elemName).blur(function () {
                placeholder = $(this).data('placeholder');
                $(this).attr('placeholder', placeholder);
            });

        }

    }

    formCustomer({
        elemName: '.form-elem',
        keySwitch: true,
        customPlace: true
    });

    

    $(menu_btn).on('click', function () {

        if (start_scroll == false) {
            start_scroll = true;
            
            let scrollName = $(this).attr('data-scroll'),
                scrollElem = $(scrollName),
                scrollTop = scrollElem.offset().top;

            if (scrollName == '#section-4') {
                scrollTop = scrollTop - 200;
            }
            if ($(burger).hasClass('active')) {
                $('body').removeClass('lock');
                $(burger).removeClass('active');
                $(menu).removeClass('active').slideToggle(300);
                if (scrollName == '#section-4') {
                    scrollTop = scrollTop + 100;
                }
                if (scrollName == '#section-2') {
                    scrollTop = scrollTop - 100;
                }
            }

            $('html, body').animate({
                scrollTop: scrollTop
            }, 1500);

            setTimeout(function () {
                start_scroll = false;
            }, 1500);
        }
    });



    AOS.init();

});