$(document).ready(function() {
  AOS.init();
  // CHECKBOX
  let checkbox = $('.header-bottom-offer-form-object__checkbox');
  let input = $('.header-bottom-offer-form-object__checkbox--hidden');

  checkbox.on('click', function () {
    if (input.prop('checked') == true) {
      input.prop('checked', false);
    } else {
      input.prop('checked', true);
    }
  });
  // SCROLL
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header-top").addClass("fixed");
    } else {
      $(".header-top").removeClass("fixed");
    }
 });
  // INPUT MASK
  $("input[name=user-tel]").inputmask("+7(999)999-99-99");
  // accordions
  $('.answers-list-card-top').on('click', function() {
    $(this).toggleClass('active');
    $(this).parent().find('.answers-list-card-bottom').slideToggle();
  });
  // OWL CAROUSEL
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    smartSpeed: 1500,
  });
  // TABS
  $('.examples-buttons-button').on('click', function() {
    $('.examples-buttons-button').removeClass('active');
    $('.examples-cases-case').hide();

    let target = $(this).attr('data-target');

    $(this).addClass('active');
    $('.examples-cases-case[data-target='+ target +']').show();
  });
  // TIMER
  $('#counter').timer({
    countdown: true,
    duration: '29d10h35m',
    format: '%d : %h : %m'
  });

  $('#counters').timer({
    countdown: true,
    duration: '29d10h35m',
    format: '%d : %h : %m'
  });

  // popup
  $('.header-top__btn').on('click', function() {
    $('.popups-container').show().css('display', 'flex');
  });

  $('.popups-overlay').on('click', function() {
    $('.popups-container').hide();
  });

  $('.popup__close').on('click', function() {
    $('.popups-container').hide();
  });

  // send
  $('.popup-form').on('submit', function () {
    let user_name = $(this).find('input[name=user-name]').val();
    let user_tel = $(this).find('input[name=user-tel]').val();

    $.ajax({
        url: "send.php",
        type: "post",
        dataType: "json",
        data: {
            "user_name": user_name,
            "user_tel": user_tel,
        },
        success: function (data) { }
    });

    $('.popup-container').hide();
    ym(82299619,'reachGoal','send-order')
    
    $(this)[0].reset();
    return false;
  });

  // send header-bottom
  $('.header-bottom-offer-form').on('submit', function () {
    let user_name = $(this).find('input[name=user-name]').val();
    let user_tel = $(this).find('input[name=user-tel]').val();

    $.ajax({
        url: "send.php",
        type: "post",
        dataType: "json",
        data: {
            "user_name": user_name,
            "user_tel": user_tel,
        },
        success: function (data) { }
    });

    ym(82299619,'reachGoal','send-order')

    $(this)[0].reset();
    return false;
  });
});