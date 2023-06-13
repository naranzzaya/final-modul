$(document).ready(function(){
// Висящие элементы в 'about.html'
  $(function () {
    let x;
    $(window).on('scroll', function() {
      x = $(window).scrollTop();
      // console.log(x)
      if (x > 0) {
        // динозавр
        $('.about_dino_blue').css('top', '15vw');
        $('.about_dino_blue').css('left', '0vw');
        $('.about_dino_blue').css('position', 'absolute');
        // заголовок
        $('.hang_h').css('top', '4vw');
        $('.hang_h').css('left', '4vw');
        $('.hang_h').css('position', 'absolute');
        // 'книга'
        $('.to_book').css('top', '40vw');
        $('.to_book').css('left', '25vw');
        $('.to_book').css('position', 'absolute');
        // 'видео'
        $('.to_video').css('top', '44.5vw');
        $('.to_video').css('left', '25vw');
        $('.to_video').css('position', 'absolute');
      }
      if (x > 750) {
        // динозавр
        $('.about_dino_blue').css('top', '15vw');
        $('.about_dino_blue').css('position', 'fixed');
        // заголовок
        $('.hang_h').css('top', '6vw');
        $('.hang_h').css('left', '9vw');
        $('.hang_h').css('position', 'fixed');
        // 'книга'
        $('.to_book').css('top', '40vw');
        $('.to_book').css('left', '30vw');
        $('.to_book').css('position', 'fixed');
        // 'видео'
        $('.to_video').css('top', '44.5vw');
        $('.to_video').css('left', '30vw');
        $('.to_video').css('position', 'fixed');
      }
      if (x > 1400) {
        // динозавр
        $('.about_dino_blue').css('top', '65vw');
        $('.about_dino_blue').css('left', '0vw');
        $('.about_dino_blue').css('position', 'absolute');
        // заголовок
        $('.hang_h').css('top', '57vw');
        $('.hang_h').css('left', '4vw');
        $('.hang_h').css('position', 'absolute');
        // 'книга'
        $('.to_book').css('top', '90vw');
        $('.to_book').css('left', '25vw');
        $('.to_book').css('position', 'absolute');
        // 'видео'
        $('.to_video').css('top', '94.5vw');
        $('.to_video').css('left', '25vw');
        $('.to_video').css('position', 'absolute');
      }
    });
  });
// Отзывы
  // карточка 1
  $(".card_one").hover(function () {
      $('.card_one').addClass('animate__animated animate__pulse');
    });
  // карточка 2
  $(".card_two").hover(function () {
      $('.card_two').addClass('animate__animated animate__pulse');
    });
  // карточка 3
  $(".card_three").hover(function () {
      $('.card_three').addClass('animate__animated animate__pulse');
    });

// Звездочки 1
  $(".star_one_one").click(function () {
    $('.star_one_one').css('background-image','url(images/star.svg)');
    $('.star_one_two').css('background-image','url(images/star_white.svg)');
    $('.star_one_three').css('background-image','url(images/star_white.svg)');
    $('.star_one_four').css('background-image','url(images/star_white.svg)');
    $('.star_one_five').css('background-imager','url(images/star_white.svg)');
  });
  $(".star_one_two").click(function () {
    $('.star_one_one').css('background-image','url(images/star.svg)');
    $('.star_one_two').css('background-image','url(images/star.svg)');
    $('.star_one_three').css('background-image','url(images/star_white.svg)');
    $('.star_one_four').css('background-image','url(images/star_white.svg)');
    $('.star_one_five').css('background-image','url(images/star_white.svg)');
  });
  $(".star_one_three").click(function () {
    $('.star_one_one').css('background-image','url(images/star.svg)');
    $('.star_one_two').css('background-image','url(images/star.svg)');
    $('.star_one_three').css('background-image','url(images/star.svg)');
    $('.star_one_four').css('background-image','url(images/star_white.svg)');
    $('.star_one_five').css('background-image','url(images/star_white.svg)');
  });
  $(".star_one_four").click(function () {
    $('.star_one_one').css('background-image','url(images/star.svg)');
    $('.star_one_two').css('background-image','url(images/star.svg)');
    $('.star_one_three').css('background-image','url(images/star.svg)');
    $('.star_one_four').css('background-image','url(images/star.svg)');
    $('.star_one_five').css('background-image','url(images/star_white.svg)');
  });
  $(".star_one_five").click(function () {
    $('.star_one_one').css('background-image','url(images/star.svg)');
    $('.star_one_two').css('background-image','url(images/star.svg)');
    $('.star_one_three').css('background-image','url(images/star.svg)');
    $('.star_one_four').css('background-image','url(images/star.svg)');
    $('.star_one_five').css('background-image','url(images/star.svg)');
  });
// Звездочки 2
  $(".star_tw_one").click(function () {
    $('.star_tw_one').css('background-image','url(images/star.svg)');
    $('.star_tw_two').css('background-image','url(images/star_white.svg)');
    $('.star_tw_three').css('background-image','url(images/star_white.svg)');
    $('.star_tw_four').css('background-image','url(images/star_white.svg)');
    $('.star_tw_five').css('background-imager','url(images/star_white.svg)');
  });
  $(".star_tw_two").click(function () {
    $('.star_tw_one').css('background-image','url(images/star.svg)');
    $('.star_tw_two').css('background-image','url(images/star.svg)');
    $('.star_tw_three').css('background-image','url(images/star_white.svg)');
    $('.star_tw_four').css('background-image','url(images/star_white.svg)');
    $('.star_tw_five').css('background-image','url(images/star_white.svg)');
  });
  $(".star_tw_three").click(function () {
    $('.star_tw_one').css('background-image','url(images/star.svg)');
    $('.star_tw_two').css('background-image','url(images/star.svg)');
    $('.star_tw_three').css('background-image','url(images/star.svg)');
    $('.star_tw_four').css('background-image','url(images/star_white.svg)');
    $('.star_tw_five').css('background-image','url(images/star_white.svg)');
  });
  $(".star_tw_four").click(function () {
    $('.star_tw_one').css('background-image','url(images/star.svg)');
    $('.star_tw_two').css('background-image','url(images/star.svg)');
    $('.star_tw_three').css('background-image','url(images/star.svg)');
    $('.star_tw_four').css('background-image','url(images/star.svg)');
    $('.star_tw_five').css('background-image','url(images/star_white.svg)');
  });
  $(".star_tw_five").click(function () {
    $('.star_tw_one').css('background-image','url(images/star.svg)');
    $('.star_tw_two').css('background-image','url(images/star.svg)');
    $('.star_tw_three').css('background-image','url(images/star.svg)');
    $('.star_tw_four').css('background-image','url(images/star.svg)');
    $('.star_tw_five').css('background-image','url(images/star.svg)');
  });
// Звездочки 3
  $(".star_th_one").click(function () {
    $('.star_th_one').css('background-image','url(images/star.svg)');
    $('.star_th_two').css('background-image','url(images/star_white.svg)');
    $('.star_th_three').css('background-image','url(images/star_white.svg)');
    $('.star_th_four').css('background-image','url(images/star_white.svg)');
    $('.star_th_five').css('background-imager','url(images/star_white.svg)');
  });
  $(".star_th_two").click(function () {
    $('.star_th_one').css('background-image','url(images/star.svg)');
    $('.star_th_two').css('background-image','url(images/star.svg)');
    $('.star_th_three').css('background-image','url(images/star_white.svg)');
    $('.star_th_four').css('background-image','url(images/star_white.svg)');
    $('.star_th_five').css('background-image','url(images/star_white.svg)');
  });
  $(".star_th_three").click(function () {
    $('.star_th_one').css('background-image','url(images/star.svg)');
    $('.star_th_two').css('background-image','url(images/star.svg)');
    $('.star_th_three').css('background-image','url(images/star.svg)');
    $('.star_th_four').css('background-image','url(images/star_white.svg)');
    $('.star_th_five').css('background-image','url(images/star_white.svg)');
  });
  $(".star_th_four").click(function () {
    $('.star_th_one').css('background-image','url(images/star.svg)');
    $('.star_th_two').css('background-image','url(images/star.svg)');
    $('.star_th_three').css('background-image','url(images/star.svg)');
    $('.star_th_four').css('background-image','url(images/star.svg)');
    $('.star_th_five').css('background-image','url(images/star_white.svg)');
  });
  $(".star_th_five").click(function () {
    $('.star_th_one').css('background-image','url(images/star.svg)');
    $('.star_th_two').css('background-image','url(images/star.svg)');
    $('.star_th_three').css('background-image','url(images/star.svg)');
    $('.star_th_four').css('background-image','url(images/star.svg)');
    $('.star_th_five').css('background-image','url(images/star.svg)');
  });

});
