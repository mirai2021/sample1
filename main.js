$(function () {

  $('.slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。

    autoplay: true,       //自動再生
    autoplaySpeed: 2000,  //自動再生のスピード
    speed: 5000,           //スライドするスピード
    dots: false,           //スライド下のドット
    arrows: true,         //左右の矢印
    infinite: true,       //永久にループさせる
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false
  });


  $('.hamburger').click(function() {
    $('.hamburger').toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.drawer-content').addClass('active');
    } else {
      $('.drawer-content').removeClass('active');
    }
  });

  $('a[href^="#"], .drawer-content').click(function() {
    $('.hamburger, .drawer-content').removeClass('active');
  });


  // ページ内リンクのみ取得します。
  $('a[href^="#"]').click(function() {
    var adjust = 85;
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

});
