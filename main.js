let navBar = document.getElementsByTagName('nav')[0];
let downIcon = document.getElementsByClassName('down-icon')[0];

// let documentScroll = document.documentElement || document.body;
let navPosition = navBar.offsetTop;

window.onscroll = function(){
	if(window.pageYOffset >= navPosition){
		navBar.classList.add('fixedNav');
	} else {
		navBar.classList.remove('fixedNav')
	}
};

const scrollTo = function(to, duration) {
	let
		element = document.scrollingElement || document.documentElement,
		start = element.scrollTop,
		change = to - start,
		startDate = +new Date(),
		// t = current time
		// b = start value
		// c = change in value
		// d = duration
		easeInOutQuad = function(t, b, c, d) {
			t /= d/2;
			if (t < 1) return c/2*t*t + b;
			t--;
			return -c/2 * (t*(t-2) - 1) + b;
		},
		animateScroll = function() {
			let currentDate = +new Date();
			let currentTime = currentDate - startDate;
			element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
			if(currentTime < duration) {
				requestAnimationFrame(animateScroll);
			}
			else {
				element.scrollTop = to;
			}
		};
	animateScroll();
};

downIcon.addEventListener('click', () => scrollTo(navPosition, 500));