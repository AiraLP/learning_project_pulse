$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                }
            },
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').addClass('hidden').eq($(this).index()).removeClass('hidden');
    });
    $('.text-block__link').each(function(i){ //toggleClass('hidden')
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog__item .text-block__content').eq(2*i).fadeToggle().toggleClass('hidden');
            $('.catalog__item .text-block__content').eq(2*i+1).fadeToggle().toggleClass('hidden');
        });
    });
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    $('.button_catalog').on('click', function() {
        $('.overlay, #order').fadeIn('slow');
    });
    $('.button_catalog').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.text-block__header_catalog').eq(i).text());
        });
    });

    function validateForms (formSelector) {
        $(formSelector).validate({
            rules: {
                name:  {
                    required: true,
                    minlength: 3
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста введите свое имя",
                    minlength: jQuery.validator.format("Требуется ввести не менее {0} символов")
                },
                phone: "Введите номер телефона",
                email: {
                    required: "Введите адрес электронной почты",
                    email: "Введите имя почты через \"@\""
                }
            }
        });
    };
    validateForms ('#consultation-form');
    validateForms ('#order form');
    validateForms ('#consultation form');

    $('input[name=phone]').mask("+7 (999) 999-9999");

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.page-up').fadeIn();
        } else {
            $('.page-up').fadeOut();
        }
    });  
    $(".page-up").on("click", function(e){
        const anchor = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(anchor).offset().top+"px"
        });
        e.preventDefault();
        return false;
      });
      new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      }).init();
});