$(document).ready(function () {
  var mixer = mixitup(".directions__list");

  $(".directions__filter-btn").on("click", function () {
    $(".directions__filter-btn").removeClass("directions__filter-btn--active");
    $(this).addClass("directions__filter-btn--active");
  });

  $(".team__slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    draggable: false,
    waitForAnimate: true,
    responsive: [
      { breakpoint: 700, settings: { slidesToShow: 3 } },
      { breakpoint: 500, settings: { slidesToShow: 2 } },
      { breakpoint: 400, settings: { slidesToShow: 1, draggable: true } },
    ],
  });

  $(".team__slider-prev").on("click", function (e) {
    e.preventDefault();
    $(".team__slider").slick("slickPrev");
  });

  $(".team__slider-next").on("click", function (e) {
    e.preventDefault();
    $(".team__slider").slick("slickNext");
  });

  $(".slick-dots").on("click", "button", function () {
    $(".slick-dots button").removeClass("slick-dots-button--active");
    $(this).addClass("slick-dots-button--active");
  });

  $(".testimonials__slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    waitForAnimate: true,
  });

  $(".testimonials__slider-prev").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickPrev");
  });

  $(".testimonials__slider-next").on("click", function (e) {
    e.preventDefault();
    $(".testimonials__slider").slick("slickNext");
  });

  $(".program__acc-link").on("click", function (e) {
    e.preventDefault();

    if ($(this).hasClass("program__acc-link--active")) {
      $(this).removeClass("program__acc-link--active");
      $(this).children(".program__acc-text").slideUp();
    } else {
      $(".program__acc-link").removeClass("program__acc-link--active");
      $(".program__acc-text").slideUp();
      $(this).addClass("program__acc-link--active");
      $(this).children(".program__acc-text").slideDown();
    }
  });

  $(".header__nav-list a, .header__top-btn, .footer__go-top").on(
    "click",
    function (e) {
      var anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr("href")).offset().top,
          },
          2000
        );
      e.preventDefault();
      return false;
    }
  );

  setInterval(() => {
    if (
      window.pageYOffset > 0 &&
      $(".header__top").hasClass("header__top--open") === false
    ) {
      $(".burger").addClass("burger--follow");
    } else {
      $(".burger").removeClass("burger--follow");
    }
  }, 150);

  $(".burger, .overlay, .header__top a").on("click", function (e) {
    e.preventDefault();
    $(".header__top").toggleClass("header__top--open");
    $(".burger__wrapper").toggleClass("burger--open");
  });

  $(".header__top a").on("click", function (e) {
    e.preventDefault();
    $(".header__top").removeClass("header__top--open");
    $(".burger__wrapper").removeClass("burger--open");
  });

  setInterval(() => {
    if (
      $(window).width() > 1100 ||
      $(".header__top").hasClass("header__top--open") === false
    ) {
      $(".overlay").removeClass("overlay--show");
      $(".header__top").removeClass("header__top--open");
      $(".burger__wrapper").removeClass("burger--open");
    } else {
      $(".overlay").addClass("overlay--show");
    }

    console.log(
      $(window).width(),
      $(".header__top").hasClass("header__top--open")
    );
  }, 150);
});

// 20:08:50
