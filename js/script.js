window.onload = function () {
	// Visual slide
	var sw_visual = new Swiper('.sw-visual', {
		loop: true,
		speed: 500,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	});

	// Visual slide pagination focus
	sw_visual.on('slideChange', function () {
		var sw_visual_i = sw_visual.realIndex;
		switch (sw_visual_i) {
			case 0:
				$('.sw-visual__pg').removeClass('sw-visual__pg--focused');
				$('.sw-visual__pg-1').addClass('sw-visual__pg--focused');
				break;
			case 1:
				$('.sw-visual__pg').removeClass('sw-visual__pg--focused');
				$('.sw-visual__pg-2').addClass('sw-visual__pg--focused');
				break;
			case 2:
				$('.sw-visual__pg').removeClass('sw-visual__pg--focused');
				$('.sw-visual__pg-3').addClass('sw-visual__pg--focused');
				break;
			default:
		}
	});

	// Visual slide pagination click
	$('.sw-visual__pg-1').click(function () {
		sw_visual.slideTo(1);
		$('.sw-visual__pg').removeClass('sw-visual__pg--focused');
		$(this).addClass('sw-visual__pg--focused');
	});
	$('.sw-visual__pg-2').click(function () {
		sw_visual.slideTo(2);
		$('.sw-visual__pg').removeClass('sw-visual__pg--focused');
		$(this).addClass('sw-visual__pg--focused');
	});
	$('.sw-visual__pg-3').click(function () {
		sw_visual.slideTo(3);
		$('.sw-visual__pg').removeClass('sw-visual__pg--focused');
		$(this).addClass('sw-visual__pg--focused');
	});

	// menu slide
	var sw_menu_img = new Swiper('.sw-menu-img', {
		loop: true,
		navigation: {
			prevEl: '.sw-menu__prev',
			nextEl: '.sw-menu__next',
		},
	});

	var sw_menu_txt = new Swiper('.sw-menu-txt', {
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
	});

	sw_menu_img.controller.control = sw_menu_txt;
	sw_menu_txt.controller.control = sw_menu_img;

	// review slide
	var sw_review = new Swiper('.sw-review', {
		loop: true,
		slidesPerView: 3,
		spaceBetween: 20,
		navigation: {
			prevEl: '.sw-review__prev',
			nextEl: '.sw-review__next',
		},
	});
}