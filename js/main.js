// 1) Выбор цвета
// 2) Создаем текстовое описание
// 3) Считаем цену в рублях
// 4) Переводим цену в доллары

$(document).ready(function () {
    let totalPrice = 0;
    let usdRate = 0;
    const currencyUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';
    
    // При старте страницы
    colorSelect();
    compileText();
    totalPrice = calculatePrice();
    
    $.ajax({
        url: currencyUrl,
        chache: false,
        success: function (data){
            // Получили курс
            usdRate = JSON.parse(data).Valute.USD.Value;
            calculateUSD(totalPrice, usdRate);
        }
    });

    // После переключения радиокнопок
    $('#autoForm input').on('change', function() {
        compileText();
        totalPrice = calculatePrice();
        calculateUSD(totalPrice, usdRate);
    });

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

    function compileText() {
        // Находим div, в который будет выводиться текст
        const modelSpecsHolder = $('#modelSpecs');
    
        // Находим текст
        const engine = $('input[name="engine"]:checked + label').text();
        const transmission = $('input[name="transmission"]:checked + label').text();
        const packageText = $('input[name="package"]:checked + label').text();
        
        // Формируем предложение
        const text = `${engine}, ${transmission}, ${packageText}.`;
        
        // Выводим на страницу
        modelSpecsHolder.text(text);
    }

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

    function calculateUSD (totalPrice, usdRate) {
        // Рассчитали цену
        const totalPriceUsd = (totalPrice / usdRate).toFixed(0);
        // Нашли нужный div на странице
        const modelPriceUsdHolder = $('#modelPriceUSD');
        // Отформатировали цену
        const formatter = new Intl.NumberFormat('ru');
        // Вывели цену
        modelPriceUsdHolder.text(`$ ${formatter.format(totalPriceUsd)}`);
    }    
});