$(function () {

  const textarea = document.querySelector('.contact__form-textarea')
  textarea.addEventListener('input', () => {
    textarea.scrollTop > 0 ?
      textarea.style.height = textarea.scrollHeight + "px" :
      textarea.style.height = 'auto'
  })

  $('.team__slider-inner').slick({
    arrows: false,
    slidesToShow: 3.5,
    infinite: false,
    // variableWidth: true,
  })

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

  $('.blog__tab').on('click', function (e) {
    e.preventDefault()
    $('.blog__tab').removeClass('blog__tab--active')
    $('.blog__item').removeClass('blog__item--show')
    $(this).addClass('blog__tab--active')
    $($(this).attr('href')).addClass('blog__item--show')
  })

  $('.services__tab-link').on('click', function (e) {
    e.preventDefault()
    $('.services__tab-link').removeClass('services__tab-link--active')
    $('.services__image').removeClass('services__image--show')
    $(this).addClass('services__tab-link--active')
    $($(this).attr('href')).addClass('services__image--show')
  })

})