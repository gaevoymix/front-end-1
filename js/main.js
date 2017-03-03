//when click on the icon//
$('.hamburger').on('click', function () {
	if($('.main-nav').hasClass('open')) {
		$('.main-nav').removeClass('open');
	} else {
		$('.main-nav').addClass('open');
	}
});
