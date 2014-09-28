function lightbox() {
	var pageheight = $(document).height();
	console.log(pageheight); 
	var pagePosition = $(document).scrollTop();
	console.log(pagePosition);

	$('.lightbox-outer').css('height', pageheight);
	$('.lightbox-inner').css('margin-top', pagePosition+30);

	$('.lightbox-outer').css('display', 'block');
	$('.bttn_close').click(function(){
		$('.lightbox-outer').css('display', 'none');
	});
}

$(document).ready(function(){

	function initialize() {
        var mapOptions = {
        	center: new google.maps.LatLng(51.467, -0.259),
        	zoom: 13,
        	disableDefaultUI: true
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        var marker = new google.maps.Marker({
		    position: new google.maps.LatLng(51.464, -0.299),
		    map: map,
		    title: 'Find me'
		});
    }
    google.maps.event.addDomListener(window, 'load', initialize);

	/*$('.ptp a').click(function(){
		lightbox();
		return false;
	});*/

	$(document).scroll(function(){
		/*var fromHere = Math.round($(window).height() / 2);*/
		if ( $(document).width() > 765 ) {
			if ( $(this).scrollTop() > 410 ) {
				$('.lesserhead').fadeIn('slow');
			}
			if ( $(this).scrollTop() < 410 ) {
				$('.lesserhead').fadeOut('slow');
			}
		} else if ( $(document).width() < 765 ) {
			if ( $(this).scrollTop() > 410 ) {
				$('.menubtn').fadeIn('slow');
			}
			if ( $(this).scrollTop() < 410 ) {
				$('.menubtn').fadeOut('slow');
			}
			$('.lesserhead').css('display', 'none');
		}
	});

	$('.menubtn a').click(function(){
		$('.lesserhead').toggle('slow');
		return false;
	});

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 410 ) {
			$('.scrollarrow').fadeIn();
		} else {
			$('.scrollarrow').fadeOut();
		}
	});

	$('.scrollarrow').click(function(){
		$('body,html').animate({scrollTop:0},1000);
		return false;
	});

	function navigateTo(nav_btn) {
		$('body,html').animate({
			scrollTop: ( $('#' + nav_btn).position().top - 80 )
		},1000);
	}

	$('#about-banner, #work-banner, #contact-banner, #about-lesser, #work-lesser, #contact-lesser, #about-foot, #work-foot, #contact-foot').click(function(){
		var btnId = $(this).attr('id');
		var btnIdArr = btnId.split('-');
		navigateTo(btnIdArr[0]);
		return false;
	});

	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop() + 100;
		var aboutPosition = $('#about').position().top;
		var workPosition = $('#work').position().top;
		var contactPosition = $('#contact').position().top;

		function switchOff(x, y) {
			$(x + ', ' + y).css({
				'text-shadow' : 'none',
				'color' : '#1CA4FF'
			});
		}

		if (scrollTop < aboutPosition) {
			$('#about-lesser, #work-lesser, #contact-lesser').css({
				'text-shadow': 'none',
				'color': '#1CA4FF'
				});
		}
		if (scrollTop > aboutPosition && scrollTop < workPosition) {
			$('#about-lesser').css({
				'text-shadow' : '0 0 20px #fff',
				'color' : '#F6FF00'
				});
			switchOff('#work-lesser', '#contact-lesser');
		}
		if (scrollTop > workPosition && scrollTop < contactPosition) {
			$('#work-lesser').css({
				'text-shadow' : '0 0 20px #fff',
				'color' : '#F6FF00'
			});
			switchOff('#about-lesser', '#contact-lesser');
		}
		if (scrollTop > contactPosition) {
			$('#contact-lesser').css({
				'text-shadow' : '0 0 20px #fff',
				'color' : '#F6FF00'
			});
			switchOff('#about-lesser', '#work-lesser');
		}
	});

	$('#about-lesser, #work-lesser, #contact-lesser').mouseenter(function(){
		$(this).css({
			'text-shadow' : '0 0 20px #fff',
			'color' : '#F6FF00'
		});
	}).mouseleave(function(){
		$(this).css({
			'text-shadow' : 'none',
			'color' : '#1CA4FF'
		});
	});

	$(window).scroll(function(){
		var entrancePosition = Math.round($(window).height() / 3);
		var scrollTop = $(window).scrollTop() + entrancePosition;
		var backgroundPosition = $('#about').position().top;

		if ( scrollTop > backgroundPosition ) {
			$('.entrance').animate({ left : 0 }, 1000);
		}
	});

	$(window).scroll(function(){
		var activePosition = Math.round($(window).height() / 3);
		var scrollTop = $(window).scrollTop() + activePosition;
		var commutePosition = $('#commuting').position().top;

		if ( scrollTop > commutePosition ) {
			$('.commute-row').animate({backgroundColor : '#1CA4FF'},1000);
		}
	});

	$(window).scroll(function(){
		var halfWindow = Math.round($(window).height() / 2);
		var scrollTop = $(window).scrollTop() + halfWindow;
		var spareTimePosition = $('#spareTime').position().top;

		if ( scrollTop > spareTimePosition ) {
			$('.halfOne').fadeIn('400', function(){
				$('.halfTwo').fadeIn('400', function(){
					$('.halfThree').fadeIn('400', function(){
						$('.halfFour').fadeIn('400');
					});
				});
			});
		}
	});

});