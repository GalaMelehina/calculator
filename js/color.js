'use strict'
// ВЫБОР ЦВЕТА - на цену не влияет
function colorSelect () {
	// Находим на странице теги с классом .colorItem
	const colorBtns = $('#colorsSelector .colorItem');
	const mainImg = $('#imgHolder img');
	
	// Вешаем событие по клику
	colorBtns.on('click', function () {
		// Когда произошел клик, обращаемся к кнопке, по которой кликнули через this
		// и смотрим что записано в её атрибуте data-img-path, в нем записан путь к картинке, которую надо отобразить
		const imgPath = $(this).attr('data-img-path');
	
		// У изображения с авто заменяем значение атрибута src на путь к картинке нужного цвета
		mainImg.attr('src', imgPath);
	});
}

