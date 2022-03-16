'use strict'
function calculateUSD (totalPrice, usdRate) {
    // Рассчитали цену
    const totalPriceUsd = (totalPrice / usdRate).toFixed(0);
    // Нашли нужный div на странице
    const modelPriceUsdHolder = $('#modelPriceUSD');
    // Отформатировали цену
    const formatter = new Intl.NumberFormat('ru');
    // Вывели цену
    modelPriceUsdHolder.text(`$ ${formatter.format(totalPriceUsd)}`);
};
