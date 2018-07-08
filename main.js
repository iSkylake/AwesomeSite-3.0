let navBar = document.getElementsByTagName('nav')[0];
let downIcon = document.getElementsByClassName('down-icon')[0];
let about = document.getElementById('about');
let skillProgression = document.getElementsByClassName('skill-progression');
let portfolio = document.getElementById('portfolio');
let projectOverlay = document.getElementsByClassName('project-overlay');

// let documentScroll = document.documentElement || document.body;
let navPosition = navBar.offsetTop;
let portfolioPosition = portfolio.offsetTop - 20;

window.onscroll = function(){
	if(window.pageYOffset >= navPosition){
		navBar.classList.add('fixedNav');
		about.style.paddingTop = "153px";
		aboutAnimation();
	} else {
		navBar.classList.remove('fixedNav');
		about.style.paddingTop = "90px";
	}

	if(window.pageYOffset >= portfolioPosition) {
		portfolioAnimation();
	}
};

function aboutAnimation(){
	let progress = ["75%", "50%", "65%", "40%", "45%", "40%", "60%", "35%", "55%"];
	// let seconds = 1;
	about.children[0].style.transform = "translateY(0)";
	about.children[0].style.opacity = 1;
	about.children[1].style.transform = "translate(0)";
	about.children[1].style.opacity = 1;
	about.children[2].style.transform = "translate(0)";
	about.children[2].style.opacity = 1;
	for(let i=0; i<skillProgression.length; i++){
		// seconds += 0.05;
		skillProgression[i].style.width = progress[i];
		// skillProgression[i].style.transitionDuration = seconds + "s";
	}
}

function portfolioAnimation(){
	portfolio.children[0].style.opacity = 1;
	for(let i=0; i<projectOverlay.length; i++){
		projectOverlay[i].style.transform = "rotateX(0deg)";
		projectOverlay[i].style.opacity = 1;
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

