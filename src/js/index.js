(function () {
	new Swiper('#focus', {
		simulateTouch: false,
		useCSS3Transforms: false,
		autoplay: 5000,
		autoplayDisableOnInteraction: false,
		pagination: '.focus-indexes',
		paginationClickable: true,

		onFirstInit(s) {
			s.support.transitions = false;
		}
	});
}());