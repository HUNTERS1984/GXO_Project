$(document).ready(function(){
	var m_width = $(window).width();
	if(m_width <= 767){
		$('.section').css({'padding-left':0})
		$('.sidebar-navigation').css({'left':'-200px'})

		$('.trigger-mobile').click(function(){
			$('.section').css({'padding-left':'200px'})
			$('.sidebar-navigation').css({'left':'0'})
		})
		$('.close-trigger').click(function(e){
			e.preventDefault();
			$('.section').css({'padding-left':0})
			$('.sidebar-navigation').css({'left':'-200px'})
		})
	}



})