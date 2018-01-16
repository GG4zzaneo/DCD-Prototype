(function(){
	
	let mainContent = document.getElementById("main-content");
	let contentExample = [ "#0275d8", "#5cb85c", "#5bc0de", "#f0ad4e", "#d9534f" ];
	let contentCount = 0;
	
	//setInterval(changeMainContent, 3000);
	
	function changeMainContent() {
		mainContent.style.backgroundColor = contentExample[contentCount];
		contentCount++;
	}
	
})()