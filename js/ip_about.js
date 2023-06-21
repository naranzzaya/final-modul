$(document).ready(function(){
  $(".hamburger").click(function () {
    $('.burger').removeClass('none');
  });
  $(".close").click(function () {
    $('.burger').addClass('none');
  });
});
