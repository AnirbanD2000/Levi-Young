$(document).ready(function () {
    /*========accordion==========*/
	$(".accordion > li > span").click(function() {
		$(this).toggleClass("active").next('div').slideToggle(250)
		.closest('li').siblings().find('span').removeClass('active').next('div').slideUp(250);
	});
});
/*========fixed header=========*/
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) { 
        $('.header-area').addClass('fixed_header');
    } else {
        $('.header-area').removeClass('fixed_header');
    }
    if ($(window).scrollTop() > 400) {
        $('.header-area').addClass('stky');
        $('.schedule-button').addClass('active');
    } else {
        $('.header-area').removeClass('stky');
		$('.schedule-button').removeClass('active');
    }
});

$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
