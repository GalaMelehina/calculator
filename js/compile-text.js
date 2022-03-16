'use strict'
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
