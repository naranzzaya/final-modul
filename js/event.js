$(document).ready(function(){
  $(function () {
    let count_1 = 0;
    let count_2 = 0;
    let count_3 = 0;
    let count_4 = 0;
    let count_5 = 0;
    let count_6 = 0;
    let count_7 = 0;
    let count_8 = 0;
    let count_9 = 0;
    let count_10 = 0;
    let count_11 = 0;
    let count_12 = 0;
    // постер 1
    $('.one_one').click(function () {
      count_1 += 1;
      if (count_1 % 2 == 0) {
        $('.text_one_one').addClass('animate__animated animate__zoomOut');
        $('.text_one_one').addClass('none');
        $('.one_one').removeClass('animate__animated animate__fadeInLeft');
        $('.one_one').addClass('animate__animated animate__fadeInRight');
        $('.one_one').css('left', '0vw');
        $('.one_two').removeClass('animate__animated animate__zoomOut');
        $('.one_two').removeClass('none');
        $('.one_two').addClass('animate__animated animate__zoomIn');
      } else {
        $('.one_one').css('left', '16vw');
        $('.one_one').addClass('animate__animated animate__fadeInLeft');
        $('.text_one_one').removeClass('none animate__zoomOut'); //отключить класс zoomOut
        $('.text_one_one').addClass('animate__animated animate__zoomIn');
        $('.one_two').addClass('animate__animated animate__zoomOut');
        $('.one_two').addClass('none');
      }
    });
    // постер 2
    $('.one_two').click(function () {
      count_2 += 1;
      if (count_2 % 2 == 0) {
        $('.text_one_two').addClass('animate__animated animate__zoomOut');
        $('.text_one_two').addClass('none');
        $('.one_two').removeClass('animate__animated animate__fadeInRight');
        $('.one_two').addClass('animate__animated animate__fadeInLeft');
        $('.one_two').css('right', '0vw');
        $('.one_one').removeClass('animate__animated animate__zoomOut');
        $('.one_one').removeClass('none');
        $('.one_one').addClass('animate__animated animate__zoomIn');
      } else {
        $('.one_two').css('right', '16vw');
        $('.one_two').addClass('animate__animated animate__fadeInRight');
        $('.text_one_two').removeClass('none animate__zoomOut'); //отключить класс zoomOut
        $('.text_one_two').addClass('animate__animated animate__zoomIn');
        $('.one_one').addClass('animate__animated animate__zoomOut');
        $('.one_one').addClass('none');
      }
    });
    // постер 3
    $('.two_one').click(function () {
      count_1 += 1;
      if (count_1 % 2 == 0) {
        $('.text_two_one').addClass('animate__animated animate__zoomOut');
        $('.text_two_one').addClass('none');
        $('.two_one').removeClass('animate__animated animate__fadeInLeft');
        $('.two_one').addClass('animate__animated animate__fadeInRight');
        $('.two_one').css('left', '0vw');
        $('.two_two').removeClass('animate__animated animate__zoomOut');
        $('.two_two').removeClass('none');
        $('.two_two').addClass('animate__animated animate__zoomIn');
      } else {
        $('.two_one').css('left', '16vw');
        $('.two_one').addClass('animate__animated animate__fadeInLeft');
        $('.text_two_one').removeClass('none animate__zoomOut'); //отключить класс zoomOut
        $('.text_two_one').addClass('animate__animated animate__zoomIn');
        $('.two_two').addClass('animate__animated animate__zoomOut');
        $('.two_two').addClass('none');
      }
    });
    // постер 4
    $('.two_two').click(function () {
      count_2 += 1;
      if (count_2 % 2 == 0) {
        $('.text_two_two').addClass('animate__animated animate__zoomOut');
        $('.text_two_two').addClass('none');
        $('.two_two').removeClass('animate__animated animate__fadeInRight');
        $('.two_two').addClass('animate__animated animate__fadeInLeft');
        $('.two_two').css('right', '0vw');
        $('.two_one').removeClass('animate__animated animate__zoomOut');
        $('.two_one').removeClass('none');
        $('.two_one').addClass('animate__animated animate__zoomIn');
      } else {
        $('.two_two').css('right', '16vw');
        $('.two_two').addClass('animate__animated animate__fadeInRight');
        $('.text_two_two').removeClass('none animate__zoomOut'); //отключить класс zoomOut
        $('.text_two_two').addClass('animate__animated animate__zoomIn');
        $('.two_one').addClass('animate__animated animate__zoomOut');
        $('.two_one').addClass('none');
      }
    });
    // постер 5
    $('.three_one').click(function () {
      count_1 += 1;
      if (count_1 % 2 == 0) {
        $('.text_three_one').addClass('animate__animated animate__zoomOut');
        $('.text_three_one').addClass('none');
        $('.three_one').removeClass('animate__animated animate__fadeInLeft');
        $('.three_one').addClass('animate__animated animate__fadeInRight');
        $('.three_one').css('left', '0vw');
        $('.three_two').removeClass('animate__animated animate__zoomOut');
        $('.three_two').removeClass('none');
        $('.three_two').addClass('animate__animated animate__zoomIn');
      } else {
        $('.three_one').css('left', '16vw');
        $('.three_one').addClass('animate__animated animate__fadeInLeft');
        $('.text_three_one').removeClass('none animate__zoomOut'); //отключить класс zoomOut
        $('.text_three_one').addClass('animate__animated animate__zoomIn');
        $('.three_two').addClass('animate__animated animate__zoomOut');
        $('.three_two').addClass('none');
      }
    });
    // постер 6
    $('.three_two').click(function () {
      count_2 += 1;
      if (count_2 % 2 == 0) {
        $('.text_three_two').addClass('animate__animated animate__zoomOut');
        $('.text_three_two').addClass('none');
        $('.three_two').removeClass('animate__animated animate__fadeInRight');
        $('.three_two').addClass('animate__animated animate__fadeInLeft');
        $('.three_two').css('right', '0vw');
        $('.three_one').removeClass('animate__animated animate__zoomOut');
        $('.three_one').removeClass('none');
        $('.three_one').addClass('animate__animated animate__zoomIn');
      } else {
        $('.three_two').css('right', '16vw');
        $('.three_two').addClass('animate__animated animate__fadeInRight');
        $('.text_three_two').removeClass('none animate__zoomOut'); //отключить класс zoomOut
        $('.text_three_two').addClass('animate__animated animate__zoomIn');
        $('.three_one').addClass('animate__animated animate__zoomOut');
        $('.three_one').addClass('none');
      }
    });
    // постер 7
    $('.four_one').click(function () {
      count_1 += 1;
      if (count_1 % 2 == 0) {
        $('.text_four_one').addClass('animate__animated animate__zoomOut');
        $('.text_four_one').addClass('none');
        $('.four_one').removeClass('animate__animated animate__fadeInLeft');
        $('.four_one').addClass('animate__animated animate__fadeInRight');
        $('.four_one').css('left', '0vw');
        $('.four_two').removeClass('animate__animated animate__zoomOut');
        $('.four_two').removeClass('none');
        $('.four_two').addClass('animate__animated animate__zoomIn');
      } else {
        $('.four_one').css('left', '16vw');
        $('.four_one').addClass('animate__animated animate__fadeInLeft');
        $('.text_four_one').removeClass('none animate__zoomOut'); //отключить класс zoomOut
        $('.text_four_one').addClass('animate__animated animate__zoomIn');
        $('.four_two').addClass('animate__animated animate__zoomOut');
        $('.four_two').addClass('none');
      }
    });
    // постер 8
    $('.four_two').click(function () {
      count_2 += 1;
      if (count_2 % 2 == 0) {
        $('.text_four_two').addClass('animate__animated animate__zoomOut');
        $('.text_four_two').addClass('none');
        $('.four_two').removeClass('animate__animated animate__fadeInRight');
        $('.four_two').addClass('animate__animated animate__fadeInLeft');
        $('.four_two').css('right', '0vw');
        $('.four_one').removeClass('animate__animated animate__zoomOut');
        $('.four_one').removeClass('none');
        $('.four_one').addClass('animate__animated animate__zoomIn');
      } else {
        $('.four_two').css('right', '16vw');
        $('.four_two').addClass('animate__animated animate__fadeInRight');
        $('.text_four_two').removeClass('none animate__zoomOut'); //отключить класс zoomOut
        $('.text_four_two').addClass('animate__animated animate__zoomIn');
        $('.four_one').addClass('animate__animated animate__zoomOut');
        $('.four_one').addClass('none');
      }
    });
    // постер 9
    $('.five_one').click(function () {
      count_1 += 1;
      if (count_1 % 2 == 0) {
        $('.text_five_one').addClass('animate__animated animate__zoomOut');
        $('.text_five_one').addClass('none');
        $('.five_one').removeClass('animate__animated animate__fadeInLeft');
        $('.five_one').addClass('animate__animated animate__fadeInRight');
        $('.five_one').css('left', '0vw');
        $('.five_two').removeClass('animate__animated animate__zoomOut');
        $('.five_two').removeClass('none');
        $('.five_two').addClass('animate__animated animate__zoomIn');
      } else {
        $('.five_one').css('left', '16vw');
        $('.five_one').addClass('animate__animated animate__fadeInLeft');
        $('.text_five_one').removeClass('none animate__zoomOut'); //отключить класс zoomOut
        $('.text_five_one').addClass('animate__animated animate__zoomIn');
        $('.five_two').addClass('animate__animated animate__zoomOut');
        $('.five_two').addClass('none');
      }
    });
    // постер 10
    $('.five_two').click(function () {
      count_2 += 1;
      if (count_2 % 2 == 0) {
        $('.text_five_two').addClass('animate__animated animate__zoomOut');
        $('.text_five_two').addClass('none');
        $('.five_two').removeClass('animate__animated animate__fadeInRight');
        $('.five_two').addClass('animate__animated animate__fadeInLeft');
        $('.five_two').css('right', '0vw');
        $('.five_one').removeClass('animate__animated animate__zoomOut');
        $('.five_one').removeClass('none');
        $('.five_one').addClass('animate__animated animate__zoomIn');
      } else {
        $('.five_two').css('right', '16vw');
        $('.five_two').addClass('animate__animated animate__fadeInRight');
        $('.text_five_two').removeClass('none animate__zoomOut'); //отключить класс zoomOut
        $('.text_five_two').addClass('animate__animated animate__zoomIn');
        $('.five_one').addClass('animate__animated animate__zoomOut');
        $('.five_one').addClass('none');
      }
    });
    // постер 11
    $('.six_one').click(function () {
      count_1 += 1;
      if (count_1 % 2 == 0) {
        $('.text_six_one').addClass('animate__animated animate__zoomOut');
        $('.text_six_one').addClass('none');
        $('.six_one').removeClass('animate__animated animate__fadeInLeft');
        $('.six_one').addClass('animate__animated animate__fadeInRight');
        $('.six_one').css('left', '0vw');
        $('.six_two').removeClass('animate__animated animate__zoomOut');
        $('.six_two').removeClass('none');
        $('.six_two').addClass('animate__animated animate__zoomIn');
      } else {
        $('.six_one').css('left', '16vw');
        $('.six_one').addClass('animate__animated animate__fadeInLeft');
        $('.text_six_one').removeClass('none animate__zoomOut'); //отключить класс zoomOut
        $('.text_six_one').addClass('animate__animated animate__zoomIn');
        $('.six_two').addClass('animate__animated animate__zoomOut');
        $('.six_two').addClass('none');
      }
    });
    // постер 12
    $('.six_two').click(function () {
      count_2 += 1;
      if (count_2 % 2 == 0) {
        $('.text_six_two').addClass('animate__animated animate__zoomOut');
        $('.text_six_two').addClass('none');
        $('.six_two').removeClass('animate__animated animate__fadeInRight');
        $('.six_two').addClass('animate__animated animate__fadeInLeft');
        $('.six_two').css('right', '0vw');
        $('.six_one').removeClass('animate__animated animate__zoomOut');
        $('.six_one').removeClass('none');
        $('.six_one').addClass('animate__animated animate__zoomIn');
      } else {
        $('.six_two').css('right', '16vw');
        $('.six_two').addClass('animate__animated animate__fadeInRight');
        $('.text_six_two').removeClass('none animate__zoomOut'); //отключить класс zoomOut
        $('.text_six_two').addClass('animate__animated animate__zoomIn');
        $('.six_one').addClass('animate__animated animate__zoomOut');
        $('.six_one').addClass('none');
      }
    });
  });
});
