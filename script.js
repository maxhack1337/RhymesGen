function generateImage() {
    // Получить значения из полей ввода
    var text = document.getElementById("text-input").value;
    var fontSize = document.getElementById("font-size").value;
    var textColor = document.getElementById("text-color").value;

    // Создать элемент изображения
    var image = document.createElement("img");
    image.src = "generate_image.php?text=" + text + "&fontSize=" + fontSize + "&textColor=" + textColor;

    // Очистить контейнер изображений и добавить новое изображение
    var imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = "";
    imageContainer.appendChild(image);
}
