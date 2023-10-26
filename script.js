function generateImage() {
    var canvas = document.getElementById("image-canvas");
    var context = canvas.getContext("2d");

    // Получить значения из полей ввода
    var text = document.getElementById("text-input").value;
    var fontSize = document.getElementById("font-size").value;
    var textColor = document.getElementById("text-color").value;

    // Очистить холст
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Настроить шрифт
    context.font = fontSize + "px Arial";
    context.fillStyle = textColor;

    // Рассчитать позицию для текста (центрирование)
    var x = canvas.width / 2;
    var y = canvas.height / 2;

    // Нарисовать текст на холсте
    context.fillText(text, x, y);
}
