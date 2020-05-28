$(document).ready(function () {
  //nice scroll
  $("body").niceScroll();

  //scroll to top button
  $(".scroll-top-button").click(function () {
    $("html,body").animate({
      scrollTop: 0
    }, 1000);
  });

  //slider section
  var windowHeight = $(window).height(),
    upperHeight = $(".upper-section").innerHeight(),
    navHeight = $(".navbar").innerHeight();
  $(".slider-section, .carousel-item").height(
    windowHeight - (upperHeight + navHeight)
  );

  //animate about section
  $(window).scroll(function () {
    if ($(this).scrollTop() >= $('.slider-section').height() / 2) {
      $('.about-section .slide-section').addClass('animate__animated animate__fadeInLeft').css({
        opacity: 1
      });
    }

    if ($(this).scrollTop() >= $('.slider-section').height() + $('.about-section').height()) {
      $('.services-section .slide-section').addClass('animate__animated animate__fadeInLeft').css({
        opacity: 1
      });
    }

    if ($(this).scrollTop() >= $('.slider-section').height() + $('.about-section').height() + $('.services-section').height()) {
      $('.menu-section .slide-section').addClass('animate__animated animate__fadeInLeft').css({
        opacity: 1
      });
    }

    if ($(this).scrollTop() >= $('.slider-section').height() + $('.about-section').height() + $('.services-section').height() + $('.menu-section').height()) {
      $('.cards-section .slide-section').addClass('animate__animated animate__fadeInLeft').css({
        opacity: 1
      });
    }

    if ($(this).scrollTop() >= $('.slider-section').height() + $('.about-section').height() + $('.services-section').height() + $('.menu-section').height() +
      $('.cards-section').height() + $('.customers-section').height()) {
      $('.reviews-section .slide-section').addClass('animate__animated animate__fadeInLeft').css({
        opacity: 1
      });
    }

    if ($(this).scrollTop() >= $('.slider-section').height() + $('.about-section').height() + $('.services-section').height() + $('.menu-section').height() +
      $('.cards-section').height() + $('.customers-section').height() + $('.reviews-section').height()) {
      $('.why-us-section .slide-section').addClass('animate__animated animate__fadeInRight').css({
        opacity: 1
      });
    }

    if ($(this).scrollTop() >= $('.slider-section').height() + $('.about-section').height() + $('.services-section').height() + $('.menu-section').height() +
      $('.cards-section').height() + $('.customers-section').height() + $('.reviews-section').height() + $('.why-us-section').height()) {
      $('.contact-section .slide-section').addClass('animate__animated animate__fadeInRight').css({
        opacity: 1
      });
    }

    if ($(this).scrollTop() >= $('.slider-section').height() + $('.about-section').height() + $('.services-section').height() + $('.menu-section').height() +
      $('.cards-section').height() + $('.customers-section').height() + $('.reviews-section').height() + $('.why-us-section').height() + $('.contact-section').height()) {
      $('.footer-section .slide-section').addClass('animate__animated animate__fadeInLeft').css({
        opacity: 1
      });
    }

  });


  // shuffle menu section images
  $('.menu-section ul li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).data('class') === 'all') {
      $('.shuffle-img .col-md').css(
        'opacity',
        '1'
      );
    } else {
      $('.shuffle-img .col-md').css(
        'opacity',
        '0.08'
      );
      $($(this).data('class')).css('opacity', '1');
    }
  });

  //menu zooming images
  $('.menu-section .shuffle-img .zoom').hover(function () {
    $(this).find('button').css('opacity', '1');

  }, function () {
    $(this).find('button').css('opacity', '0');
  });

  //scroll to top button
  $(window).scroll(function () {
    $(this).scrollTop() >= 900 ? $('#scroll-top').fadeIn(1100) : $('#scroll-top').hide();
  })

  $('#scroll-top').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  })



});