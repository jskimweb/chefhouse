window.onload = function () {
	// AOS
	AOS.init({
		duration: 1600,
		once: true,
	});

	// m-gnb show & hide
	const mGnb = $('.m-gnb');
	const mGnbShow = 'm-gnb--show';
	const mGnbOpen = $('.m-gnb__open');
	const mGnbOpenHide = 'm-gnb__open--hide';
	const mGnbClose = $('.m-gnb__close');
	const mGnbCloseShow = 'm-gnb__close--show';
	const blackBg = $('.black-bg');

	mGnbOpen.click(function () {
		$(this).addClass(mGnbOpenHide);
		mGnbClose.addClass(mGnbCloseShow);
		mGnb.addClass(mGnbShow);
		$('html, body').css('overflow', 'hidden');
		blackBg.show();
	});
	mGnbClose.click(function () {
		$(this).removeClass(mGnbCloseShow);
		mGnbOpen.removeClass(mGnbOpenHide);
		mGnb.removeClass(mGnbShow);
		$('html, body').css('overflow', 'initial');
		blackBg.hide();
	});

	// m-gnb auto hide
	$(window).resize(function () {
		if ($(window).width() > 1023) {
			mGnbOpen.removeClass(mGnbOpenHide);
			mGnbClose.removeClass(mGnbCloseShow);
			mGnb.removeClass(mGnbShow);
			$('html, body').css('overflow', 'initial');
			blackBg.hide();
		}
	});

	// Visual slide
	let sw_visual = new Swiper('.sw-visual', {
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
	const swVisualPg = $('.sw-visual__pg');
	const swVisualPgs = [$('.sw-visual__pg-1'), $('.sw-visual__pg-2'), $('.sw-visual__pg-3')];
	const swVisualPgFocus = 'sw-visual__pg--focused';

	sw_visual.on('slideChange', function () {
		let sw_visual_index = sw_visual.realIndex;
		switch (sw_visual_index) {
			case 0:
				swVisualPg.removeClass(swVisualPgFocus);
				swVisualPgs[0].addClass(swVisualPgFocus);
				break;
			case 1:
				swVisualPg.removeClass(swVisualPgFocus);
				swVisualPgs[1].addClass(swVisualPgFocus);
				break;
			case 2:
				swVisualPg.removeClass(swVisualPgFocus);
				swVisualPgs[2].addClass(swVisualPgFocus);
				break;
			default:
		}
	});

	// Visual slide pagination click
	$.each(swVisualPgs, function (index) {
		swVisualPgs[index].click(function () {
			sw_visual.slideTo(index + 1);
			swVisualPg.removeClass(swVisualPgFocus);
			$(this).addClass(swVisualPgFocus);
		});
	});

	// Menu slide
	let sw_menu_img = new Swiper('.sw-menu-img', {
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

	let sw_menu_txt = new Swiper('.sw-menu-txt', {
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
	});

	// menu swipers connect
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
		updateOnWindowResize: true,
	});

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
	const goTop = $('.go-top');
	const goTopShow = 'go-top--show';

	goTop.click(function () {
		$('html, body').animate({
			scrollTop: 0
		});
	});

	// scroll
	const header = $('.header');
	const headerScr = 'header--scr';
	const headerTop = $('.header-top');
	const headerMain = $('.header-main');
	const headerMainScr = 'header-main--scr';
	const headerLogo = $('.header__logo');
	const headerLogoScr = 'header__logo--scr';
	const gnbMenu = $('.gnb__menu');
	const gnbMenuScr = 'gnb__menu--scr';
	const headerOrder = $('.header__order');
	const headerOrderScr = 'header__order--scr';

	$(window).scroll(function () {
		let winWidth = $(window).width();
		let winScrTop = $(window).scrollTop();

		// Header fix
		if (winWidth > 1023) {
			if (winScrTop >= 38) {
				header.addClass(headerScr);
				headerTop.hide();
				headerMain.addClass(headerMainScr);
				headerLogo.addClass(headerLogoScr);
				gnbMenu.addClass(gnbMenuScr);
				headerOrder.addClass(headerOrderScr);
			} else {
				header.removeClass(headerScr);
				headerTop.show();
				headerMain.removeClass(headerMainScr);
				headerLogo.removeClass(headerLogoScr);
				gnbMenu.removeClass(gnbMenuScr);
				headerOrder.removeClass(headerOrderScr);
			}
		}

		// Go-top
		if (winScrTop > 100) {
			goTop.addClass(goTopShow);
		} else {
			goTop.removeClass(goTopShow);
		}
	});

}