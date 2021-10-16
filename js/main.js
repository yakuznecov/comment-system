function userProgress(time) {
	// должна стартовать с 0
	let start = 0;
	var time = Math.round(time*1000/100);
	let progressElement = document.getElementById('userProgress'); // элемент прогресс бара
	let intervalId = setInterval(function () {
		if (start > 100) {
			clearInterval(intervalId);
			userProgressCallBack();
		} else {
			progressElement.value = start;
		}
		start++;
	}, time);
}

function userProgressCallBack() {
	document.querySelector('.hidden-block').style.display = 'block';
}

userProgress(2);