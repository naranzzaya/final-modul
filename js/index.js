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
    $('.ocean_st').addClass("none");
    $('.ocean_sta').addClass("none");
    $('.ocean_star').addClass("none");
    $('.ocean_plant').addClass("none");
    $('.cloud_one').addClass("none");
    $('.cloud_two').addClass("none");
    $('.cloud_three').addClass("none");
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
    $('.ocean_ground').addClass("none");
    $('.ocean_st').addClass("none");
    $('.ocean_sta').addClass("none");
    $('.ocean_star').addClass("none");
    $('.ocean_plant').addClass("none");
    $('.cloud_one').addClass("none");
    $('.cloud_two').addClass("none");
    $('.cloud_three').addClass("none");
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
    $('.leaves').addClass("none");
    $('.ocean_ground').removeClass("none");
    $('.ocean_plant').removeClass("none");
    $('.ocean_st').removeClass("none");
    $('.ocean_sta').removeClass("none");
    $('.ocean_star').removeClass("none");
    $('.cloud_one').addClass("none");
    $('.cloud_two').addClass("none");
    $('.cloud_three').addClass("none");
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
    $('.ocean_st').addClass("none");
    $('.ocean_sta').addClass("none");
    $('.ocean_star').addClass("none");
    $('.ocean_plant').addClass("none");
    $('.cloud_one').removeClass("none");
    $('.cloud_two').removeClass("none");
    $('.cloud_three').removeClass("none");
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
});
