$(document).ready(function () {

    $('.menu a').on('click', function (e) {
        e.preventDefault();

        $('.menu a').removeClass('active').filter(this).addClass('active');
        var selector = $(this).attr('href'); // About stroka
        var h = $(selector); // Dom element zagalovka

        $('html, body').animate({
            scrollTop: h.offset().top -70
        }, 700);
    })

    $('.call-menu').on('click', function () {
        $('.menu-xs').addClass('showed');
    });
    $('.close-menu').on('click', function () {
        $('.menu-xs').removeClass('showed');
    });
    $('.call-modal').on('click', function () {
        $('.modal-box').addClass('show');
        $('.overlay').addClass('show');
    });

    $('.overlay,.close-modal').on('click', function () {
        $('.modal-box').removeClass('show');
        $('.overlay').removeClass('show');
    });

    $('.rateFaq-item .ask').on('click', function () {
        var answer = $(this).next();
        $(this).find('.down-blue').toggleClass('rotate-180');
        $('.rateFaq-item .answer').not(answer).slideUp(400);
        answer.slideToggle(400);
    });

    $('.faq-item .faq-item-head').on('click', function () {
        var answer = $(this).next();
        $('.faq-item').removeClass('faq-active');
        // $('.down-grey').removeClass('down-rotate');
        $(this).closest('.faq-item').addClass('faq-active');
        $(this).find('.down-grey').toggleClass('down-rotate');

        $('.faq-item .faq-item-answer').not(answer).slideUp(400);
        answer.slideToggle(400);
    });

    $('.faq-item').on('click', function () {
        var selector =  $(this).attr('data-link');
        var faqImg = $("div[id="+selector+"]");// Dom element
        var allImages = $('.faq-item-img');
        allImages.removeClass('img-active');
        faqImg.toggleClass('img-active');

    });

    $("#ex6").slider();
    $("#ex6").on("slide", function (slideEvt) {
        $("#ex6SliderVal").text(slideEvt.value);
    });

    $("#ex7").slider();
    $("#ex7").on("slide", function (slideEvt) {
        $("#ex7SliderVal").text(slideEvt.value);
    });

    $('.review-for').slick({
        arrows: false,
        fade: true,
        asNavFor: '.review-nav',
        pauseOnHover: true
    });

    $('.review-nav').slick({
        pauseOnHover: true,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        //centerPadding: '0px',
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        asNavFor: '.review-for',
        speed: 1000,
        // autoplay: true,
        // autoplaySpeed: 2000
    });

    $("#phone").inputmask({"mask": "+7(999) 999-99-99"});

    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();

    $(".input-effect input").focusout(function(){
        if($(this).val() != ""){
            $(this).addClass("has-content");
        }else{
            $(this).removeClass("has-content");
        }
    })

    $('.selectpicker').selectpicker();
});

window.onscroll = function() {myFunction()};

var header = document.querySelector('header');
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }
}

// add new field
$(".add-field").click(function () {
    var html = '';
    html += '<div class="input-effect remove-input">';
    html += '<input class="effect-16" type="text">';
    html += '<label>Пәннің аты</label>';
    html += '<span class="focus-border"></span>';
    html += '<i class="fas fa-times delete-field"></i>';
    html += '</div>';
    $('.new-field').append(html);
});

// remove new field
$(document).on('click', '.delete-field', function () {
    $(this).closest('.remove-input').remove();
});






