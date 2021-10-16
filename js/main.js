let comments = [];

document.getElementById('comment-add').onclick = function(event) {
	event.preventDefault();
	let commentName = document.getElementById('comment-name');
	let commentBody = document.getElementById('comment-body');

	let comment = {
		name: commentName.value, // получение значения из инпута
		body: commentBody.value,
		time: Math.floor(Date.now()/1000)
	}
}