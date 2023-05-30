$(document).ready(function(){

// При наведении на 'о нас'

  $(".about").hover(function () {
    $('body').css('background-color','#84BC33');
    // элементы
    $('.light_one').addClass("none");
    $('.light_two').addClass("none");
    $('.light_three').addClass("none");
    $('.leaves').removeClass("none");
    $('.ocean_ground').addClass("none");
    // заголовки
    if ($('.about').hasClass('about_fill')){
      ($('.about').removeClass('about_fill'));
      ($('.about').addClass('about_frame'));
    }
    if ($('.menu').hasClass('menu_frame')){
      ($('.menu').removeClass('menu_frame'));
      ($('.menu').addClass('menu_fill'));
    }
    if ($('.event').hasClass('event_frame')){
      ($('.event').removeClass('event_frame'));
      ($('.event').addClass('event_fill'));
    }
    if ($('.shop').hasClass('shop_frame')){
      ($('.shop').removeClass('shop_frame'));
      ($('.shop').addClass('shop_fill'));
    }
    // баннер
    if ($('.banner').hasClass('hicocktails')){
      ($('.banner').removeClass('hicocktails'));
      ($('.banner').addClass('hidino'));
    }else if ($('.banner').hasClass('hiposter')){
        ($('.banner').removeClass('hiposter'));
        ($('.banner').addClass('hidino'));
    } else if ($('.banner').hasClass('hibag')){
      ($('.banner').removeClass('hibag'));
      ($('.banner').addClass('hidino'));
    }
  });


// При наведении на 'меню'

  $(".menu").hover(function () {
    $('body').css('background-color','#69235C');
    // элементы
    $('.light_one').removeClass("none");
    $('.light_two').removeClass("none");
    $('.light_three').removeClass("none");
    $('.leaves').addClass("none");
    $('.ocean_ground').removeClass("none");
    // заголовки
    if ($('.about').hasClass('about_frame')){
        ($('.about').removeClass('about_frame'));
        ($('.about').addClass('about_fill'));
      }
    if ($('.menu').hasClass('menu_fill')){
        ($('.menu').removeClass('menu_fill'));
        ($('.menu').addClass('menu_frame'));
      }
    if ($('.event').hasClass('event_frame')){
        ($('.event').removeClass('event_frame'));
        ($('.event').addClass('event_fill'));
      }
    if ($('.shop').hasClass('shop_frame')){
        ($('.shop').removeClass('shop_frame'));
        ($('.shop').addClass('shop_fill'));
      }
    // баннер
    if ($('.banner').hasClass('hidino')){
        ($('.banner').removeClass('hidino'));
        ($('.banner').addClass('hicocktails'));
    } else if ($('.banner').hasClass('hiposter')){
        ($('.banner').removeClass('hiposter'));
        ($('.banner').addClass('hicocktails'));
    } else if ($('.banner').hasClass('hibag')){
      ($('.banner').removeClass('hibag'));
      ($('.banner').addClass('hicocktails'));
    }
  });


// При наведении на 'события'

  $(".event").hover(function () {
    $('body').css('background-color','#FCC537');
    // элементы
    $('.light_one').addClass("none");
    $('.light_two').addClass("none");
    $('.light_three').addClass("none");
    // $('.leaves').addClass("none");
    $('.ocean_ground').removeClass("none");
    if ($('.ocean_ground').hasClass('none')){
      ($('.ocean_ground').removeClass('none'));

    }
    // заголовки
    if ($('.about').hasClass('about_frame')){
      ($('.about').removeClass('about_frame'));
      ($('.about').addClass('about_fill'));
    }
    if ($('.menu').hasClass('menu_frame')){
      ($('.menu').removeClass('menu_frame'));
      ($('.menu').addClass('menu_fill'));
    }
    if ($('.event').hasClass('event_fill')){
      ($('.event').removeClass('event_fill'));
      ($('.event').addClass('event_frame'));
    }
    if ($('.shop').hasClass('shop_frame')){
      ($('.shop').removeClass('shop_frame'));
      ($('.shop').addClass('shop_fill'));
    }
    // баннер
    if ($('.banner').hasClass('hidino')){
      ($('.banner').removeClass('hidino'));
      ($('.banner').addClass('hiposter'));
    } else if ($('.banner').hasClass('hicocktails')){
      ($('.banner').removeClass('hicocktails'));
      ($('.banner').addClass('hiposter'));
    } else if ($('.banner').hasClass('hibag')){
      ($('.banner').removeClass('hibag'));
      ($('.banner').addClass('hiposter'));
    }
  });


// При наведении на 'магазин'

  $(".shop").hover(function () {
    $('body').css('background-color','#6DBBE9');
    // элементы
    $('.light_one').addClass("none");
    $('.light_two').addClass("none");
    $('.light_three').addClass("none");
    $('.leaves').addClass("none");
    $('.ocean_ground').addClass("none");
    $('.cloud_one').removeClass("none");
    // заголовки
    if ($('.about').hasClass('about_frame')){
      ($('.about').removeClass('about_frame'));
      ($('.about').addClass('about_fill'));
    }
    if ($('.menu').hasClass('menu_frame')){
      ($('.menu').removeClass('menu_frame'));
      ($('.menu').addClass('menu_fill'));
    }
    if ($('.event').hasClass('event_frame')){
      ($('.event').removeClass('event_frame'));
      ($('.event').addClass('event_fill'));
    }
    if ($('.shop').hasClass('shop_fill')){
      ($('.shop').removeClass('shop_fill'));
      ($('.shop').addClass('shop_frame'));
    }
    // баннер
    if ($('.banner').hasClass('hidino')){
      ($('.banner').removeClass('hidino'));
      ($('.banner').addClass('hibag'));
    } else if ($('.banner').hasClass('hicocktails')){
      ($('.banner').removeClass('hicocktails'));
      ($('.banner').addClass('hibag'));
    } else if ($('.banner').hasClass('hiposter')){
      ($('.banner').removeClass('hiposter'));
      ($('.banner').addClass('hibag'));
    }
  });


// висящие элементы в 'about.html'
  $(function () {
    let x;
    $(window).on('scroll', function() {
      x = $(window).scrollTop();
      // console.log(x)
      if (x > 800) {
        // динозавр
        $('.about_dino_blue').css('top', '5vw');
        $('.about_dino_blue').css('position', 'fixed');
        // заголовок
        $('.hang_h').css('top', '5vw');
        $('.hang_h').css('left', '4vw');
        $('.hang_h').css('position', 'fixed');
        // 'книга'
        $('.to_book').css('top', '75vw');
        $('.to_book').css('position', 'fixed');
        // 'видео'
        $('.to_video').css('top', '80vw');
        $('.to_video').css('position', 'fixed');
      }
      // if (x > 1600) {
      //   // динозавр
      //   $('.about_dino_blue').css('top', '16vw');
      //   $('.about_dino_blue').css('left', '0vw');
      //   $('.about_dino_blue').css('position', 'absolute');
      //   // заголовок
      //   $('.hang_h').css('top', '5vw');
      //   $('.hang_h').css('left', '4vw');
      //   $('.hang_h').css('position', 'absolute');
      //   // 'книга'
      //   $('.to_book').css('top', '75vw');
      //   $('.to_book').css('position', 'absolute');
      //   // 'видео'
      //   $('.to_video').css('top', '80vw');
      //   $('.to_video').css('position', 'absolute');
      // }
    });
  });
});
