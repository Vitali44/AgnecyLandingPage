// $(".nav_link").click(function() {
//   //Try to animate content
//   $(".container").addClass("animate_content");
//   $(".navigation")
//     .fadeOut(1000)
//     .delay(1) //время появления после клика
//     .fadeIn(500);

//   setTimeout(function() {
//     $("navigation").removeClass("animate_content");
//   }, 1200);

//   //reome fadeIn class
//   setTimeout(function() {
//     $("navigation").removeClass("fadeIn");
//   }, 1500);
// });

// //show part of site after click
// $("home_link").click(function() {
//   setTimeout(function() {
//     $(".home").addClass("fadeIn");
//   }, 400);

//   alert("JS is ");
// });

$("a").click(function() {
  //'a" значит что присваеивается всем якорным ссылкам
  $("html, body").animate(
    {
      //управление скроллингом
      scrollTop: $($.attr(this, "href")) //это перенос элемента в объект jQuery, а затем доступ к атрибуту href объекта
        .offset().top //после клика показывает ссылочный элемент с его верхней границы
    },
    700
  ); // 700 скорость прокрутки
  return false;
});
