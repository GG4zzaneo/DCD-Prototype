"use strict";

(function(){
	
	let mainContent = document.getElementById("main-content");
	let contentExample = [ "#0275d8", "#5cb85c", "#5bc0de", "#f0ad4e", "#d9534f" ];
	let contentCount = 0;
	
	alert("start");
	
	setInterval(changeMainContent, 3000);
	
	function changeMainContent() {
		alert("Function called");
		mainContent.style.backgroundColor = contentExample[contentCount];
		alert("Colour swap");
		if (contentCount === contentExample.length - 1) {
			contentCount++;
		} else {
			contentCount = 0;
		}
		
	}
	
})()