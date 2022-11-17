$(".page-scroll").on("click", function (e) {
  let tujuan = $(this).attr("href");
  let elemenTujuan = $(tujuan);

  $("body").animate(
    {
      scrollTop: elemenTujuan.offser().top,
    },
    1000
  );

  e.preventDefault();
});

$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });
});
