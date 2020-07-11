// ハンバーガーメニュー

$('.btnmenu').on('click', function () {
    $('.nav_toggle, .nav').toggleClass('show');
    $('.btnmenu,').toggleClass('show2');
});
$('.btnmenu1').on('click', function () {
    $('.nav_toggle1').toggleClass('show');
    $('.show3').toggleClass('show4');
});
/*$('.show6').on('click', function () {
    $('.show3').toggleClass('show7');
});*/
//$('.btnmenu1').on('click', function () {
//    $('.show3').removeClass('show7');
//});
//$('.show6').on('click', function () {
//    $('.nav_toggle1').toggleClass('show');
//});
$(function () {
    2
    $(window).scroll(function () {
        3
        $("#test").each(function () {
            4
            var imgPos = $(this).offset().top;
            5
            var scroll = $(window).scrollTop();
            6
            var windowHeight = $(window).height();
            7
            if (scroll > imgPos - windowHeight + windowHeight / 5) {
                8
                $(this).addClass("fade_on");
                9
            } else {
                10
                $(this).removeClass("fade_on");
                11
            }
            12
        });
        13
    });
    14

/*$(function(){
  // #で始まるa要素をクリックした場合に処理
  $('a[href^=top.html#video]').click(function(){
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 6100;
    // スクロールの速度（ミリ秒）
    var speed = 400;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href= $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});*/


    var headerH = 60; //ヘッダーの高さ
    $(window).on("load", function(){
      if(location.hash !== ""){
        var targetOffset = $(location.hash).offset().top;
        $(window).scrollTop(targetOffset - headerH);
      }
    });
});
