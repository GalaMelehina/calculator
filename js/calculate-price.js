'use strict'
function calculatePrice() {
// Находим div для цены на странице
const modelPriceHolder = $('#modelPrice');

// Получаем текстовое значение цены и переводим в число
let enginePrice = parseInt($('input[name="engine"]:checked').val());
let transmissionPrice = parseInt($('input[name="transmission"]:checked').val());
let packagePrice = parseInt($('input[name="package"]:checked').val());

// Суммируем
const totalPrice = enginePrice + transmissionPrice + packagePrice;

// Форматируем цену - разбиваем число по разрядам
const formatter = new Intl.NumberFormat('ru');

// Выводим цену
modelPriceHolder.text(`${formatter.format(totalPrice)} руб.`);

return totalPrice;
}