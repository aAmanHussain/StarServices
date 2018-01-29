$(window).scroll(function(){
    if ($(window).scrollTop() > $('#header').height()) {
		$('#navigation').addClass('navbar-fixed');
    } else {
		$('#navigation').removeClass('navbar-fixed');
    }
});