$(function(){
	$('.services__tab-link').on('click', function(e) {
		e.preventDefault()
		$('.services__tab-link').removeClass('services__tab-link--active')
		$('.services__image').removeClass('services__image--show')
		$(this).addClass('services__tab-link--active')
		$($(this).attr('href')).addClass('services__image--show')
	})
});