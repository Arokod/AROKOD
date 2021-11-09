$(function () {

  // ------------------------------------- Плавный скролл -------------------------------------------

  $('.menu a, .logo, .contact-block__btn, .footer__list a').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top, }, 800);
  });

  // ---------------------------- Кастомный скролл в текстовом поле ---------------------------------
  const textarea = document.querySelector('.contact__form-textarea')
  textarea.addEventListener('input', () => {
    textarea.scrollTop > 0 ?
      textarea.style.height = textarea.scrollHeight + "px" :
      textarea.style.height = 'auto'
  })

  // ---------------------------- Табуляция в секции сервисов -----------------------------------
  $('.services__tab-link').on('click', function (e) {
    e.preventDefault()
    $('.services__tab-link').removeClass('services__tab-link--active')
    $('.services__image').removeClass('services__image--show')
    $(this).addClass('services__tab-link--active')
    $($(this).attr('href')).addClass('services__image--show')
  })

  // ---------------------------- Табуляция в секции блога -----------------------------------
  $('.blog__tab').on('click', function (e) {
    e.preventDefault()
    $('.blog__tab').removeClass('blog__tab--active')
    $('.blog__item').removeClass('blog__item--show')
    $(this).addClass('blog__tab--active')
    $($(this).attr('href')).addClass('blog__item--show')
  })

  // ---------------------------- Слайдер в секции отзывов -----------------------------------
  $('.testimonials__slider-inner').slick({
    arrows: false,
    draggable: false,
  })
  $('.testimonials__prev').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider-inner').slick('slickPrev')
  })
  $('.testimonials__next').on('click', function (e) {
    e.preventDefault()
    $('.testimonials__slider-inner').slick('slickNext')
  })

  // ---------------------------- Слайдер в секции команды -----------------------------------
  $('.team__slider-inner').slick({
    arrows: false,
    slidesToShow: 3.5,
    infinite: false,
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          dots: true,
        }
      },
    ]
  })

  // ------------------------------------- Меню бургер ----------------------------------------------
  setInterval(() => {
    if
      ($(document).scrollTop() > 50 && $('.header__top-inner').hasClass('header__top-inner--open') === false) {
      $('.burger-btn').addClass('burger-btn--follow');
    }
    else {
      $('.burger-btn').removeClass('burger-btn--follow');
    }
  }, 0);

  $('.burger-btn, .header__top-inner--open a, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header__top-inner').toggleClass('header__top-inner--open')
    $('.overlay').toggleClass('overlay--show')
    $('.burger-btn').removeClass('burger-btn--follow')
    $('.burger-btn').toggleClass('burger-btn--cross')
    if ($(document).scrollTop() > 50 && $('.header__top-inner').hasClass('header__top-inner--open')) {
      $('.burger-btn').addClass('burger-btn--follow')
    }
  })





})