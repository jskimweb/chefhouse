window.onload = function () {
	// AOS 초기화
	AOS.init({
		duration: 1600,
		once: true,
	});

	// 모달창 닫기
	const modal = $('.modal');
	const modalBox = $('.modal-box');
	const modalClose = $('.modal__close');

	modalClose.click(function () {
		modal.stop().fadeOut();
	});

	modal.click(function () {
		$(this).stop().fadeOut();
	});

	modalBox.click(function (event) {
		event.stopPropagation();
	});

	// 스크롤 시 Header 고정
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
		let winWidth = $(window).outerWidth();
		let winScrTop = $(window).scrollTop();

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
	});

	// 모바일 gnb 보이기/숨기기
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
		blackBg.show();
		$('html, body').css('overflow', 'hidden');
	});
	mGnbClose.click(function () {
		$(this).removeClass(mGnbCloseShow);
		mGnbOpen.removeClass(mGnbOpenHide);
		mGnb.removeClass(mGnbShow);
		blackBg.hide();
		$('html, body').removeAttr('style');
	});

	// 리사이징된 윈도우 크기에 따른 모바일 gnb 자동 숨기기
	$(window).resize(function () {
		if ($(window).outerWidth() > 1023) {
			mGnbOpen.removeClass(mGnbOpenHide);
			mGnbClose.removeClass(mGnbCloseShow);
			mGnb.removeClass(mGnbShow);
			blackBg.hide();
			$('html, body').removeAttr('style');
		}
	});

	// Visual 슬라이드
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

	// Visual 슬라이드 페이지네이션 포커스
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

	// Visual 슬라이드 페이지네이션 클릭 시 이동
	$.each(swVisualPgs, function (index) {
		swVisualPgs[index].click(function () {
			sw_visual.slideTo(index + 1);
			swVisualPg.removeClass(swVisualPgFocus);
			$(this).addClass(swVisualPgFocus);
		});
	});

	// Menu 이미지 슬라이드
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

	// Menu 텍스트 슬라이드
	let sw_menu_txt = new Swiper('.sw-menu-txt', {
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true,
		},
	});

	// Menu swiper 연동
	sw_menu_img.controller.control = sw_menu_txt;
	sw_menu_txt.controller.control = sw_menu_img;

	// Story 슬라이드
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

	// Review 슬라이드
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

	// 스크롤 위치에 따른 Go-top 보이기/숨기기
	$(window).scroll(function () {
		let winScrTop = $(window).scrollTop();

		if (winScrTop > 100) {
			goTop.addClass(goTopShow);
		} else {
			goTop.removeClass(goTopShow);
		}
	});
}