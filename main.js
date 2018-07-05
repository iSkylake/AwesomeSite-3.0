let navBar = document.getElementsByTagName('nav')[0];
let downIcon = document.getElementsByClassName('down-icon')[0];
let about = document.getElementById('about');
let skillProgression = document.getElementsByClassName('skill-progression');

// let documentScroll = document.documentElement || document.body;
let navPosition = navBar.offsetTop;

window.onscroll = function(){
	if(window.pageYOffset >= navPosition){
		navBar.classList.add('fixedNav');
		about.style.paddingTop = "153px";
		skillAnimation();
	} else {
		navBar.classList.remove('fixedNav');
		about.style.paddingTop = "90px";
	}
};

function skillAnimation(){
	let progress = ["75%", "50%", "65%", "40%", "45%", "40%", "60%", "35%", "55%"];
	for(let i=0; i<skillProgression.length; i++){
		skillProgression[i].style.width = progress[i];
	}
}

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