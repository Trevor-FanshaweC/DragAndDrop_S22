(() => {
	// collect the buttons as the bottom of the page
	let theThumbnails = document.querySelectorAll('#buttonHolder img'),
		gameBoard = document.querySelector('.puzzle-board');

	function changeBGImg() {
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`;
	}
 
	theThumbnails.forEach(image => image.addEventListener('click', changeBGImg));	
})();
