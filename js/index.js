window.onload = function() {
	var screen = document.getElementById('screen');

	window.mySwipe = new Swipe(screen, {
		startSlide: 0,
		speed: 400,
		auto: 3000,
		continuous: true,
		disableScroll: false,
		stopPropagation: false,
		callback: function(index, elem) {},
		transitionEnd: function(index, elem) {}
	});

	var slider = document.getElementById('slider');
	window.mySwipe = new Swipe(slider, {
		startSlide: 0,
		speed: 400,
		auto: 3000,
		continuous: true,
		disableScroll: false,
		stopPropagation: false,
		callback: function(index, elem) {
			var dotlist = document.getElementsByClassName('dot');
			for(i = 0; i < dotlist.length; i++) {
				var dot = dotlist[i];
				dot.className="dot";
				if(i == index) {
					dot.className="dot active";
				}
			}
		},
		transitionEnd: function(index, elem) {}
	});
};
