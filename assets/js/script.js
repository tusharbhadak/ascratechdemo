$(document).ready(function() {
    $('.acc-container .acc:nth-child(1) .acc-head').addClass('active');
    $('.acc-container .acc:nth-child(1) .acc-content').slideDown();
    $('.acc-head').on('click', function() {
        if($(this).hasClass('active')) {
          $(this).siblings('.acc-content').slideUp();
          $(this).removeClass('active');
        }
        else {
          $('.acc-content').slideUp();
          $('.acc-head').removeClass('active');
          $(this).siblings('.acc-content').slideToggle();
          $(this).toggleClass('active');
        }
    });     
    });



    /* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function(){
    if ($(window).scrollTop() >= 80) {
        $('header').addClass('fixed-header');
        $('header .css-1bblnov').addClass('visible-title');
    }
    else {
        $('header').removeClass('fixed-header');
        $('header .css-1bblnov').removeClass('visible-title');
    }
});


// ==========Count increase code ======================

// Counter To Count Number Visit


// ==========Logo Slide Code===============
$(document).ready(function(){
    $('.carousel').slick({
    slidesToShow: 6,
    dots:true,
    centerMode: true,
    });
  });
  
  // Slick version 1.5.8


  // Used bootstrap v4.5,jquery v3.5.1, owl carousel v2, font awesome v4.7.0

$('.testi.owl-carousel').owlCarousel({
  items: 1,
  margin:10,
  lazyLoad: true,
  dots:true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive:{
    0:{
      items:1,
    },
    600:{
      items:1,
    },
    1000:{
      items:1,
    }
  }
});

// ===========Header code start==================


$(function ($) {
  $(".mobile_btn").on("click", function () {
    $(".main_menu").slideToggle();
    $(".mobile_btn i").toggleClass("fa-xmark fa-xl");
  });

  if ($(window).width() < 768) {
    $(".main_menu  ul li a").on("click", function () {
      $(this)
        .parent(".has_dropdown")
        .children(".sub_menu")
        .css({ "padding-left": "15px" })
        .stop()
        .slideToggle();

      $(this)
        .parent(".has_dropdown")
        .children("a")
        .find(".fa-angle-right")
        .stop()
        .toggleClass("fa-rotate-90");
    });
  }
});


// =========Sticky menu===============
$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
      $('nav').addClass("sticky");
    }
    else{
      $('nav').removeClass("sticky");
    }
  });
