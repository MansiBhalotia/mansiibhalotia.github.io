jQuery(document).ready(function(){

	"use strict"

	$('.slider').ripples({
		resolution:512,
		dropRadius: 20,
		perturbance: 0.03,
		interactive: true,
	});

	var typed = new Typed('.text', {
  strings: ['I am <strong class=primary>MANSI BHALOTIA</strong>.^1000', 'This Is A Project On <strong class=secondary>Front-End Development</strong>.^1000'],
  typespeed:0,
  loop:true
	});

	$(window).scroll(function(){
		var top=$(window).scrollTop();

		if(top>70)
		{
			$('header').addClass('transparent-bg')
		}
		else
		{
			if($('header').hasClass('transparent-bg'))
			{
				$('header').removeClass('transparent-bg')
			}
		}
	});
});
