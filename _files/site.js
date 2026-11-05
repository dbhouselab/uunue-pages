// 메뉴: 넓은 화면은 마우스를 올리면 하위 메뉴, 좁은 화면은 "Menu" 버튼으로 열고 닫기
var ww = jQuery(window).width();
jQuery(document).ready(function() {
	jQuery(".nav li a").each(function() {
		if (jQuery(this).next().length > 0) {
			jQuery(this).addClass("parent");
		};
	})
	jQuery(".toggleMenu").click(function(e) {
		e.preventDefault();
		jQuery(this).toggleClass("active");
		jQuery(".nav").slideToggle('fast');
	});
	adjustMenu();
})

jQuery(window).bind('resize orientationchange', function() {
	ww = jQuery(window).width();
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 981) {
		jQuery(".toggleMenu").css("display", "block");
		if (!jQuery(".toggleMenu").hasClass("active")) {
			jQuery(".nav").hide();
		} else {
			jQuery(".nav").show();
		}
		jQuery(".nav li").unbind('mouseenter mouseleave');
	} else {
		jQuery(".toggleMenu").css("display", "none");
		jQuery(".nav").show();
		jQuery(".nav li").removeClass("hover");
		jQuery(".nav li a").unbind('click');
		jQuery(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
			jQuery(this).toggleClass('hover');
		});
	}
}

// 첫 화면 슬라이드
jQuery(window).on('load', function() {
	jQuery('#slider').nivoSlider({
		effect: 'random',
		animSpeed: 500,
		pauseTime: 4000,
		directionNav: false,
		controlNav: true,
		pauseOnHover: false
	});
});
