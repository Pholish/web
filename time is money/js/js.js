$(function() {
					$('a[href*="#"]:not([href="#"])').click(function() {
						if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
							var target = $(this.hash);
							target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
							if (target.length) {
								$('html, body').stop().animate({
									scrollTop: target.offset().top
								}, 600);
							return false;
							}
						}
					});
				});
jQuery(document).ready(function(){
    	    jQuery('.slider').slick({
						dots:false,
    	     	infinite: true,
    	     	fade: true,
    	     	cssEase: 'linear',
    	    });
    	

				$('.hover-button').hover(function() {
					$(this).parents('.service').find('.hover-js').addClass('hover');
				},function() {
					$(this).parents('.service').find('.hover-js').removeClass('hover');
				});
			

				$(window).scroll(function(){
  				var sticky = $('.headhesive'),
							scroll = $(window).scrollTop();
					if (scroll >= 100) sticky.addClass('fixed');
					else sticky.removeClass('fixed');
				
			});