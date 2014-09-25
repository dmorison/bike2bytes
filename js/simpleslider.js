var clientWidth = $(window).width();
console.log('screen width = ' + clientWidth);
var percentClientWidth;
var incrementPrevious;
var incrementNext;

function calculateSize(){
	var quantity = document.getElementsByTagName('article');
	console.log('number of articles = ' + quantity.length);

	articleWidth = 100 / quantity.length;
	console.log('calculated article width = ' + articleWidth);

	if (clientWidth < 462) {
		percentClientWidth = clientWidth;
		incrementPrevious = 18;
		incrementNext = 18;
	} else if (clientWidth > 462 && clientWidth < 684) {
		percentClientWidth = clientWidth * 0.5;
		incrementPrevious = 32;
		incrementNext = 10;
	} else if (clientWidth > 684 && clientWidth < 1272) {
		percentClientWidth = clientWidth * 0.3333333;
		incrementPrevious = 24;
		incrementNext = 0;
	} else if (clientWidth > 1272) {
		percentClientWidth = clientWidth * 0.3333333;
		incrementPrevious = 112;
		incrementNext = -13;
	}

	console.log('third of client width = ' + percentClientWidth);
	var sliderInnerWidth = percentClientWidth * quantity.length;
	console.log('slider inner width = ' + sliderInnerWidth);

	var sliderInnerWidthPercent = sliderInnerWidth / clientWidth * 100;
	$('.sliderInner').css('width', sliderInnerWidthPercent + '%');
	$('article').css('width', articleWidth + '%');
	
	return percentClientWidth;
	return incrementPrevious;
	return incrementNext;
}

function calculateShift(direction){
	if (direction === '+') {
		var currentPosition = eval($('.sliderInner').offset().left - (incrementPrevious));
	} else if (direction === '-') {
		var currentPosition = eval($('.sliderInner').offset().left + (incrementNext));
	}
	console.log('inners current position = ' + currentPosition);
	console.log('the css direction = ' + direction);
	
	/*console.log(clientWidth * 0.3333333);*/
	console.log(percentClientWidth);
	var shiftTo = eval(currentPosition + direction + percentClientWidth);
	console.log('shift inner to = ' + shiftTo);
	$('.sliderInner').animate({left : shiftTo},'slow');
}

function setRightControl(){
	if (clientWidth < 462) {
		console.log('should get client width = ' + clientWidth);
		var controlRightPosition = $('.sliderOuter').width() - 44;
	} else if (clientWidth > 462 && clientWidth < 1272) {
		var controlRightPosition = $('.sliderOuter').width() - 32;
	} else if (clientWidth > 1272) {
		var controlRightPosition = $('.sliderOuter').width() + 18;
	}
	$('.controlRight').css('left', controlRightPosition + 'px');
}

$(document).ready(function(){
	
	calculateSize();
	$('#previous, #next').click(function(){
		var shift;
		if ( $(this).attr('id') === 'previous' ) {
			shift = '+';
		} else if ( $(this).attr('id') === 'next' ) {
			shift = '-';
		}
		calculateShift(shift);
		return false;
	});

	$('.sliderInner, .sliderControl a').mouseenter(function(){
		setRightControl();
		$('.sliderControl a').css('display', 'block');
	}).mouseleave(function(){
		$('.sliderControl a').css('display', 'none');
	});

});