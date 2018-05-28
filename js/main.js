$('#scroll-to-discover').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $('#main-content').offset().top
	}, 500, 'linear');
});
