let comments = [];
loadComments();

document.getElementById('comment-add').onclick = function (event) {
	event.preventDefault();
	let commentName = document.getElementById('comment-name');
	let commentBody = document.getElementById('comment-body');

	let comment = {
		name: commentName.value, // получение значения из инпута
		body: commentBody.value,
		time: Math.floor(Date.now() / 1000),
	};

	// Необходимо очистить форму
	commentName.value = '';
	commentBody.value = '';

	// Массив comment добавляем в массив comments
	comments.push(comment);

	// Сохранение в локал
	saveComments();

	// Показать комментарии
	showComments();
};

function saveComments() {
	localStorage.setItem('comments', JSON.stringify(comments)); // массив преобразуем в строку и сохраняем локально
}

// Создаем функцию для сохранения локально комментариев (запускается при загрузке страницы)
function loadComments() {
	if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
	showComments();
}

function showComments() {
	let commentField = document.querySelector('#comment-field'); // получаем поле, где будет вывод комментариев
	console.log(commentField);
	let out = '';
	comments.forEach(function (item) {
		out += `<p class="text-right small"><em>${timeConverter(item.time)}</em></p>`;
		out += `<p class="alert alert-primary">${item.name}</p>`;
		out += `<p class="alert alert-success">${item.body}</p>`;
	});

	// После выводим на странице
	commentField.innerHTML = out;
}

function timeConverter(UNIX_timestamp) {
	var a = new Date(UNIX_timestamp * 1000); // создается новая дата
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();
	var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
	return time;
}
