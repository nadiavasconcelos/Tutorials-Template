var Navigation = {
	init : function(){
		Navigation.scrollSections();
		Navigation.showTopOption();
		$('.gototop').click(function(){
			Navigation.scrollToTop();
			return false;
		})
	},

	showTopOption : function(){
		$( window ).scroll(function(){
			topOffset = $('.gototop').offset().top;
			if( topOffset > 40 ){
				$('.gototop').slideDown('fast');
			}else{
				$('.gototop').slideUp('fast');
			}
		});
	},
	scrollToTop : function(){
		$('body, html').animate({scrollTop:0}, 'slow');
	},
	scrollSections : function(){
		$('.navigation').smint({
	    	'scrollSpeed' : 1000
	    });
	}
}

$(document).ready(function($) {
	Navigation.init();
});