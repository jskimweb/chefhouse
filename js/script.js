window.onload = function () {
	// AOS
	AOS.init({
		duration: 1600,
		once: true,
	});

	// Header fix
	$(window).scroll(function () {
		if (screen.width > 1023) {
			var sT = $(window).scrollTop();
			if (sT >= 38) {
				$('.header').addClass('header--scr');
				$('.header-top').hide();
				$('.header-main').addClass('header-main--scr');
				$('.header__logo').addClass('header__logo--scr');
				$('.gnb__menu').addClass('gnb__menu--scr');
				$('.header__order').addClass('header__order-scr');
			} else {
				$('.header').removeClass('header--scr');
				$('.header-top').show();
				$('.header-main').removeClass('header-main--scr');
				$('.header__logo').removeClass('header__logo--scr');
				$('.gnb__menu').removeClass('gnb__menu--scr');
				$('.header__order').removeClass('header__order-scr');
			}
		}
	});

	// m-gnb show & hide
	$('.m-gnb__open').click(function () {
		$(this).addClass('m-gnb__open--hide');
		$('.m-gnb__close').addClass('m-gnb__close--show');
		$('.m-gnb').addClass('m-gnb--show');
		$('html,body').css('overflow', 'hidden');
		$('.black-bg').show();
	});
	$('.m-gnb__close').click(function () {
		$(this).removeClass('m-gnb__close--show');
		$('.m-gnb__open').removeClass('m-gnb__open--hide');
		$('.m-gnb').removeClass('m-gnb--show');
		$('html,body').css('overflow', 'initial');
		$('.black-bg').hide();
	});

	// m-gnb
	$(window).resize(function () {
		if (screen.width > 1023) {
			$('.m-gnb__open').removeClass('m-gnb__open--hide');
			$('.m-gnb__close').removeClass('m-gnb__close--show');
			$('.m-gnb').removeClass('m-gnb--show');
			$('html,body').css('overflow', 'initial');
			$('.black-bg').hide();
		}
	})

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

	// Menu slide
	var sw_menu_img = new Swiper('.sw-menu-img', {
		loop: true,
		navigation: {
			prevEl: '.sw-menu__prev',
			nextEl: '.sw-menu__next',
		},
		pagination: {
			el: '.sw-menu-img__pg',
			type: 'fraction',
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

	// Story slide
	new Swiper('.sw-story', {
		slidesPerView: 'auto',
		scrollbar: {
			el: '.sw-story__bar',
			draggable: true,
		},
		breakpoints: {
			768: {
				allowTouchMove: false,
			}
		},
	})

	// Review slide
	new Swiper('.sw-review', {
		loop: true,
		slidesPerView: 'auto',
		spaceBetween: 10,
		navigation: {
			prevEl: '.sw-review__prev',
			nextEl: '.sw-review__next',
		},
		breakpoints: {
			768: {
				spaceBetween: 20,
			}
		},
	});

	// Go-top
	$(window).scroll(function () {
		var sT = $(window).scrollTop();
		if (sT > 100) {
			$('.go-top').addClass('go-top--show');
		} else {
			$('.go-top').removeClass('go-top--show');
		}
	});

	$('.go-top').click(function () {
		$('html,body').animate({
			scrollTop: 0
		});
	});
}