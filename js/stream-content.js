"use strict";

(function () {

	let mainContent = document.getElementById("main-content");
	let rssContainer = document.getElementById("rss-container");
	let tickerContainer = document.getElementById("ticketer-container");
	let ticketer = document.getElementById("ticketer-content");


	//Prototype Code
	let mainContentExample = ["#0275d8", "#5cb85c", "#5bc0de", "#f0ad4e", "#d9534f"];
	let ticketerContentExample = ["Ticketer Content 1 Ticketer Content 1", "Ticketer Content 2"];

	//Counters
	let mainContentCount = 0;
	let rssContentCount = 0;
	let ticketerContentCount = 0;

	//Get Ticketer Lengths
	let windowWidth = window.innerWidth;
	let ticketerWidth = ticketer.offsetWidth;
	let ticketerX = windowWidth;
	let ticketerSetPoint = (ticketerWidth + 10) * -1;


	//Hide Ticketer
	ticketer.style.transform = `translateX(${windowWidth}px)`;

	console.log(window.innerWidth);
	//console.log(`translateX(${ticketerWidth}px)`);


	changeMainContent();
	changeRssFeed();
	changeTicketerContent();

	setInterval(changeMainContent, 3000);
	setInterval(changeRssFeed, 5000);

	function changeMainContent() {
		//console.log(mainContentCount);

		mainContent.style.backgroundColor = mainContentExample[mainContentCount];
		if (mainContentCount < mainContentExample.length - 1) {
			mainContentCount++;
		} else {
			mainContentCount = 0;
		}
	}

	function changeRssFeed() {
		//console.log(rssContentCount);
		//console.log(rssContainer.children.length);

		rssContainer.children[rssContentCount].classList.add("slide-on");
		rssContainer.children[rssContentCount].classList.add("animate");

		setTimeout(function () {
			rssContainer.children[rssContentCount].classList.add("slide-off");
			rssContainer.children[rssContentCount].addEventListener("transitionend", removeRssTransition);
		}, 3000);

	}

	function removeRssTransition() {
		rssContainer.children[rssContentCount].classList.remove("animate");
		rssContainer.children[rssContentCount].classList.remove("slide-on");
		rssContainer.children[rssContentCount].classList.remove("slide-off");
		rssContainer.children[rssContentCount].removeEventListener("transitionend", removeRssTransition);
		if (rssContentCount < rssContainer.children.length - 1) {
			rssContentCount++;
			//console.log("Next!");
		} else {
			//console.log("Reset!");
			rssContentCount = 0;
		}
	}

	function changeTicketerContent() {
		//console.log(ticketerX);

		if (ticketerX > ticketerSetPoint) {
			ticketer.style.transform = `translateX(${ticketerX}px)`;
			ticketerX -= 2;
		} else {
			ticketer.style.transform = `translateX(${windowWidth}px)`;
			ticketerX = windowWidth;
			
			if (ticketerContentCount < ticketerContentExample.length - 1) {
				ticketerContentCount++;
			} else {
				ticketerContentCount = 0;
			}
			//console.log(ticketerContentCount);
			
			ticketer.innerHTML = ticketerContentExample[ticketerContentCount];
			ticketerWidth = ticketer.offsetWidth;
			ticketerSetPoint = (ticketerWidth + 10) * -1;

		}

		setTimeout(changeTicketerContent, 25);
	}


})()
