$(document).ready(function(){

	// проблемма в том что скролл топ тоже высчитывается по разносму при разныз размерах экрана 
	// или окна браузера. этот пример сделан под размер 1441х900
	// для этого использую переменную определюящую ширину экрана globalHeight

	var globalHeight = $(window).height();
	console.log(globalHeight);


	$('#one').on('click', function(){
		$('.page__content').animate({scrollTop:0}, 1500);
		$('.parallax__box__one').children('.image__box').animate({'margin-top': '0'}, 700);
		$('.parallax__box__four').children('.image__box').animate({'margin-top': '300px'}, 300);
		$('.parallax__box__one').siblings('.move__it__box').children('.image__box').animate({'margin-top': '0'}, 700);	
	});
	$('#two').on('click', function(){
	 	$('.page__content').animate({scrollTop: globalHeight}, 1500);
	 	$('.parallax__box__one').children('.image__box').animate({'margin-top': '-300px'}, 700);
	 	$('.parallax__box__two').children('.image__box').animate({'margin-top': '0'}, 700);
	 	$('.parallax__box__three').children('.image__box').animate({'margin-top': '0'}, 700);
	});
	$('#three').on('click', function(){
		$('.page__content').animate({scrollTop: (globalHeight * 2)}, 1500);
		$('.parallax__box__two').children('.image__box').animate({'margin-top': '-300px'}, 700);
		$('.parallax__box__three').children('.image__box').animate({'margin-top': '0'}, 700);
		$('.parallax__box__four').children('.image__box').animate({'margin-top': '0'}, 700);
	});
	$('#four').on('click', function(){
		$('.page__content').animate({scrollTop: (globalHeight * 3)}, 1500);
		$('.parallax__box__four').children('.image__box').animate({'margin-top': '0'}, 700);
		$('.parallax__box__three').children('.image__box').animate({'margin-top': '-300px'}, 700);
	});


    ////counter for SCROLL
	$('.page__content').scroll(function(){
			var position = $('.page__content').scrollTop();
		// console.log(position);
		   if (position >= (globalHeight - 100)){
				$('#two').css('background-color', 'grey');
				$('#two').siblings().css('background-color', '#5de1a4');
			} if (position >= ((globalHeight * 2) - 100)) {
				$('#three').css('background-color', 'grey');
				$('#three').siblings().css('background-color', '#5de1a4');
			} if (position >= ((globalHeight * 3) - 100)) {
				$('#four').css('background-color', 'grey');
				$('#four').siblings().css('background-color', '#5de1a4');
				$('.move__it__box').children('.image__box').animate({'margin-top': '0'}, 700);
			} if (position < globalHeight){
				$('.nav__bullet').css('background-color', '#5de1a4');
			}
			///below is script for background changes
			if (position >= ((globalHeight * 2) - 50)) {
				$('.background').animate({'top': '-100%'}, 0.3);
				$('.background__two').animate({'top': '0'}, 0.3);
			} if (position < ((globalHeight * 2) - 51)){
				$('.background').animate({'top': '0'}, 0.3);
				$('.background__two').animate({'top': '100%'}, 0.3);
			}
		});
});