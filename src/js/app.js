//=include lib/jquery-3.1.1.min.js
//=include lib/slick.min.js
//=include common.js
//=include lib/retina.min.js

$(document).ready(function() {
	$body = $('body');

	// burger
	$('.btn-nav-js').click(function(){
		$('body').toggleClass('is-close');
	});

	$(".btn-call").click(function() {
		$(this).parent().find(".modal-js").addClass("is-open");
	});

	$(".js-modal-hide").click(function() {
		$(".modal-js").removeClass("is-open");
	});

	// preventDefault
	$("a[href='#']").click(function(e) {
		e.preventDefault();
	});

	$header = $(".header");
	$window = $(window);

	$window.scroll(function(){
		if ( $window.scrollTop() > 0) {
			$header.addClass("is-fixed");
		} else{
			$header.removeClass("is-fixed");
		}
	});

	$menuLink = $(".menu__link");
	$menu = $(".menu");

	$sliderPreview = $(".slider-preview-js");
	$sliderPopular = $(".slider-popular-js");
	$sliderProduct = $('.slider-product-js');
	$sliderNav = $('.slider-nav-js');

	$sliderPreview.slick({
		nextArrow: '<button class="slick-next"><i class="fa fa-arrow-right"></i></button>',
		prevArrow: '<button class="slick-prev"><i class="fa fa-arrow-left"></i></button>',
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
		{
			breakpoint: 600,
			settings: {
				arrows: false
			}
		}
		]
	});

	$sliderPopular.slick({
		nextArrow: '<button class="slick-next"><i class="fa fa-arrow-right"></i></button>',
		prevArrow: '<button class="slick-prev"><i class="fa fa-arrow-left"></i></button>',
		slidesToShow: 3,
		autoplay: true,
		autoplaySpeed: 1000,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	$sliderProduct.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.slider-nav-js',
		autoplay: true,
		fade: true,
		autoplaySpeed: 10000
	});
	$sliderNav.slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-product-js',
		centerMode: true,
		autoplay: true,
		focusOnSelect: true,
		centerPadding: 10
	});


	(function() {
		var menu = $('.js-box');
		var link = $('.js-nav-link');
		var section = $('.js-menu-section');
		var activeLink = null;
		var OPEN = 'is-open';
		var ACTIVE = 'is-active';
		var delay = 400;
		var menuOpened = false;

		link.hover(showMenu, hideMenu);
		menu.hover(function() {

			showActive();
		}, hideMenu);

		function showMenu(e) {
			activeLink = $(this);

			var target = activeLink.data('target');
			var currentSection = section.filter('[data-menu="' + target + '"]');

			section.removeClass(ACTIVE);
			link.removeClass(ACTIVE);

			currentSection.addClass(ACTIVE);
			showActive();
		}

		function hideMenu(e) {
			menuOpened = false;
			setTimeout(function() {
				if (menuOpened) return
					menu.removeClass(OPEN);
				link.removeClass(ACTIVE);
			}, delay);
		}

		function showActive() {
			activeLink.addClass(ACTIVE);
			menu.addClass(OPEN);
			menuOpened = true;
		}
	})();


	$('.js-drop-trigger').click(function(){
		$(this).parents('.js-drop-menu').find('ul').slideToggle('fast');
		return false;
	});

	$('.js-drop').click(function(){
		$(this).toggleClass('active')
		$(this).next('ul').slideToggle('fast');
		return false;
	});

	// tabs
	$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
		$(this).addClass('active').siblings().removeClass('active')
		.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});


});
