"use strict";

(function () {

	let mainContent = document.getElementById("main-content");
	let rssContainer = document.getElementById("rss-container");



	let contentExample = ["#0275d8", "#5cb85c", "#5bc0de", "#f0ad4e", "#d9534f"];
	let mainContentCount = 0;
	let rssContentCount = 0;

	changeMainContent();
	changeRssFeed();

	setInterval(changeMainContent, 3000);
	setInterval(changeRssFeed, 5000);

	function changeMainContent() {
		//console.log(mainContentCount);

		mainContent.style.backgroundColor = contentExample[mainContentCount];
		if (mainContentCount < contentExample.length - 1) {
			mainContentCount++;
		} else {
			mainContentCount = 0;
		}
	}

	function changeRssFeed() {
		console.log(rssContentCount);
		console.log(rssContainer.children.length);
		
		rssContainer.children[rssContentCount].classList.add("slide-on");
		rssContainer.children[rssContentCount].classList.add("animate");

		setTimeout(function () {
			rssContainer.children[rssContentCount].classList.add("slide-off");
			rssContainer.children[rssContentCount].addEventListener("transitionend", removeTransition);
		}, 3000);

	}

	function removeTransition() {
		rssContainer.children[rssContentCount].classList.remove("animate");
		rssContainer.children[rssContentCount].classList.remove("slide-on");
		rssContainer.children[rssContentCount].classList.remove("slide-off");
		rssContainer.children[rssContentCount].removeEventListener("transitionend", removeTransition);
		if (rssContentCount < rssContainer.children.length - 1) {
			rssContentCount++;
			console.log("Next!");
		} else {
			console.log("Reset!");
			rssContentCount = 0;
		}
	}

})()
