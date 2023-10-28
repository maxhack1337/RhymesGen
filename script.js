document.addEventListener("DOMContentLoaded", function iss() {
    // Ваш код для работы с DOM-деревом и элементами страницы здесь

var bgChooseSelect = document.getElementById("bgchoose");
var textInputE = document.getElementById("text-input-e");
var isEmoji = false;

 
bgChooseSelect.addEventListener("change", function () {
    var selectedValue = bgChooseSelect.value;

    // Проверяем, выбрано ли значение "Эмодзи"
    if (selectedValue === "Эмодзи") {
        // Если выбрано "Эмодзи", устанавливаем стиль "display: block" для text-input-e
        isEmoji = true;
    } else {
        // В противном случае устанавливаем стиль "display: none"
        isEmoji = false;
    }
});
});

var customFontMain1 = new FontFace('rhymesMain1', 'url(rhymesMain1.woff2)');
var customFontPseudo1 = new FontFace('rhymesPseudo1', 'url(rhymesPseudo1.woff2)');
var customFontMain = new FontFace('rhymesMain', 'url(rhymesMain.woff2)');
var customFontPseudo = new FontFace('rhymesPseudo', 'url(rhymesPseudo.woff2)');
var useAltFont = false;

var altFontCheckbox = document.getElementById("altfont");
altFontCheckbox.addEventListener("change", function () {
    useAltFont = altFontCheckbox.checked;
});


// Флаги для отслеживания загрузки каждого шрифта
var mainFontLoaded = false;
var pseudoFontLoaded = false;
var mainFontLoaded1 = false;
var pseudoFontLoaded1 = false;

Promise.all([customFontMain.load(), customFontPseudo.load(),customFontMain1.load(), customFontPseudo1.load()]).then(function (loadedFonts) {
    loadedFonts.forEach(function (font) {
        document.fonts.add(font);
    });

    // Устанавливаем флаги для каждого шрифта
    if (loadedFonts[0].family === 'rhymesMain') {
        mainFontLoaded = true;
    }
    if (loadedFonts[1].family === 'rhymesPseudo') {
        pseudoFontLoaded = true;
    }
	if (loadedFonts[2].family === 'rhymesMain1') {
        mainFontLoaded1 = true;
    }
    if (loadedFonts[3].family === 'rhymesPseudo1') {
        pseudoFontLoaded1 = true;
    }
});

function generateImage() {
    if (!(mainFontLoaded && pseudoFontLoaded && mainFontLoaded1 && pseudoFontLoaded1)) {
        // Если один из шрифтов не загружен, не выполнять код
        return;
    }

    var canvas = document.getElementById("image-canvas");
    var context = canvas.getContext("2d");
	context.clearRect(0, 0, canvas.width, canvas.height);

    // Загрузка пользовательского фонового изображения
    var imageUpload = document.getElementById("image-upload");
    if (imageUpload.files.length > 0) {
        var userImage = new Image();
        userImage.src = URL.createObjectURL(imageUpload.files[0]);

        userImage.onload = function () {
            // Рисовать пользовательское изображение как фон
            context.drawImage(userImage, 0, 0, canvas.width, 1195);
			var bgChoose = document.getElementById("bgchoose");
            // Загрузка изображения "bgPseudo.png"
            var bgImage = new Image();

            // Проверяем состояние чекбокса
            

				bgImage.src = "assets/bgPseudo"+bgChoose.value+".png";
				bgImage.onload = function () {
                // Рисовать изображение "bgPseudo.png" поверх пользовательского фона
                context.drawImage(bgImage, 0, parseInt(document.getElementById("bg-input-start").value), canvas.width, canvas.height);

                // Получить значения из полей ввода
				
				
			
				var emojiRun = document.querySelector(".emojioneemoji").getAttribute("src");
				var emojiText = emojiRun;

				
				
                var text = document.getElementById("text-input").value;
                var fontSize = document.getElementById("font-size").value;
                var textColor = document.getElementById("text-color").value;

                var text1 = document.getElementById("text-input1").value;
                var fontSize1 = document.getElementById("font-size1").value;
                var textColor1 = document.getElementById("text-color1").value;

                var text2 = document.getElementById("text-input2").value;
                var fontSize2 = document.getElementById("font-size2").value;
                var textColor2 = document.getElementById("text-color2").value;

                var text3 = document.getElementById("text-input3").value;
                var fontSize3 = document.getElementById("font-size3").value;
                var textColor3 = document.getElementById("text-color3").value;
				
				var text4 = document.getElementById("text-input4").value;
                var fontSize4 = document.getElementById("font-size4").value;
                var textColor4 = document.getElementById("text-color4").value;
				
				text = text.toUpperCase();
				text1 = text1.toUpperCase();
				text2 = text2.toUpperCase();
				text3 = text3.toUpperCase();
				text4 = text4.toUpperCase();


                var x = parseInt(document.getElementById("text-input-start").value);

                var emptyCount = 0;

                if (text === '') {
                    emptyCount++;
                }
                if (text1 === '') {
                    emptyCount++;
                }
                if (text2 === '') {
                    emptyCount++;
                }
                if (text3 === '') {
                    emptyCount++;
                }

                if (emptyCount === 0) {
                    x +=20;
                } else if (emptyCount === 1) {
                    x += 84;
                } else if (emptyCount === 2) {
                    x += 148;
                } else if (emptyCount === 3) {
                    x += 212;
                } else if (emptyCount === 4) {
                    x += 276;
                }

				if(document.getElementById("bgchoose").value === "Эмодзи"){
				var emo = new Image();
				emo.src = emojiRun;
				var xxx = canvas.width / 2 - emo.width / 2 - 22;
				emo.onload = function() {
					
					context.drawImage(emo, xxx, 802+parseInt(document.getElementById("bg-input-start").value), 128, 128);
				};
				
				}
                // Настроить шрифт и цвет текста
                if (useAltFont) {
    context.font = fontSize + "px 'rhymesMain1', Arial, sans-serif";
} else {
    context.font = fontSize + "px 'rhymesMain', Arial, sans-serif";
}
                context.fillStyle = textColor;

                // Нарисовать текст на холсте
                var textMetrics = context.measureText(text);
                context.fillText(text, (canvas.width - textMetrics.width) / 2, x);

                if (useAltFont) {
    context.font = fontSize1 + "px 'rhymesMain1', Arial, sans-serif";
} else {
    context.font = fontSize1 + "px 'rhymesMain', Arial, sans-serif";
}
                context.fillStyle = textColor1;
                var y1 = parseInt(fontSize1) + x + 10;
                var textMetrics1 = context.measureText(text1);
                context.fillText(text1, (canvas.width - textMetrics1.width) / 2, y1);

                if (useAltFont) {
    context.font = fontSize2 + "px 'rhymesMain1', Arial, sans-serif";
} else {
    context.font = fontSize2 + "px 'rhymesMain', Arial, sans-serif";
}
                context.fillStyle = textColor2;
                var y2 = parseInt(fontSize2) + parseInt(fontSize1) + x + 20;
                var textMetrics2 = context.measureText(text2);
                context.fillText(text2, (canvas.width - textMetrics2.width) / 2, y2);

                if (useAltFont) {
    context.font = fontSize3 + "px 'rhymesMain1', Arial, sans-serif";
} else {
    context.font = fontSize3 + "px 'rhymesMain', Arial, sans-serif";
}
                context.fillStyle = textColor3;
                var y3 = parseInt(fontSize3) + parseInt(fontSize2) + parseInt(fontSize1) + x + 30;
                var textMetrics3 = context.measureText(text3);
                context.fillText(text3, (canvas.width - textMetrics3.width) / 2, y3);
				
				context.fillStyle = textColor4;
context.fillStyle = textColor4;
var y4 = 1240;

// Разбиваем текст на части, разделенные звездочками
var textParts = text4.split('*');

// Вычисляем ширину всех частей текста
var totalTextWidth = 0;
for (var i = 0; i < textParts.length; i++) {
    var textPart = textParts[i];
    var useRhymesMainFont = i % 2 === 1; // Проверяем, нужно ли применять шрифт 'rhymesMain' внутри звездочек

    if (useRhymesMainFont) {
        context.font = fontSize4 + "px 'rhymesMain', Arial, sans-serif";
    } else {
        context.font = fontSize4 + "px 'rhymesPseudo', Arial, sans-serif";
    }

    var textMetricsPart = context.measureText(textPart);
    totalTextWidth += textMetricsPart.width;
}

// Вычисляем начальную позицию x для центрирования
var startX = (canvas.width - totalTextWidth) / 2;

// Отрисовываем каждую часть текста с соответствующим шрифтом
for (var i = 0; i < textParts.length; i++) {
    var textPart = textParts[i];
    var useRhymesMainFont = i % 2 === 1; // Проверяем, нужно ли применять шрифт 'rhymesMain' внутри звездочек

    if (useRhymesMainFont) {
        if (useAltFont) {
    context.font = fontSize4 + "px 'rhymesMain1', Arial, sans-serif";
} else {
    context.font = fontSize4 + "px 'rhymesMain', Arial, sans-serif";
}
    } else {
        if (useAltFont) {
    context.font = fontSize4 + "px 'rhymesPseudo1', Arial, sans-serif";
} else {
    context.font = fontSize4 + "px 'rhymesPseudo', Arial, sans-serif";
}
    }

    var textMetricsPart = context.measureText(textPart);
    context.fillText(textPart, startX, y4);

    // Обновляем текущую позицию x для следующей части текста
    startX += textMetricsPart.width;
}
context.fillStyle = textColor4;
var y4 = 1240;

// Разбиваем текст на части, разделенные звездочками
var textParts = text4.split('*');

// Вычисляем ширину всех частей текста
var totalTextWidth = 0;
for (var i = 0; i < textParts.length; i++) {
    var textPart = textParts[i];
    var useRhymesMainFont = i % 2 === 1; // Проверяем, нужно ли применять шрифт 'rhymesMain' внутри звездочек

    if (useRhymesMainFont) {
        if (useAltFont) {
    context.font = fontSize4 + "px 'rhymesMain1', Arial, sans-serif";
} else {
    context.font = fontSize4 + "px 'rhymesMain', Arial, sans-serif";
}
    } else {
        if (useAltFont) {
    context.font = fontSize4 + "px 'rhymesPseudo1', Arial, sans-serif";
} else {
    context.font = fontSize4 + "px 'rhymesPseudo', Arial, sans-serif";
}
    }

    var textMetricsPart = context.measureText(textPart);
    totalTextWidth += textMetricsPart.width;
}

// Вычисляем начальную позицию x для центрирования
var startX = (canvas.width - totalTextWidth) / 2;

// Отрисовываем каждую часть текста с соответствующим шрифтом
for (var i = 0; i < textParts.length; i++) {
    var textPart = textParts[i];
    var useRhymesMainFont = i % 2 === 1; // Проверяем, нужно ли применять шрифт 'rhymesMain' внутри звездочек

    if (useRhymesMainFont) {
        if (useAltFont) {
    context.font = fontSize4 + "px 'rhymesMain1', Arial, sans-serif";
} else {
    context.font = fontSize4 + "px 'rhymesMain', Arial, sans-serif";
}
    } else {
        if (useAltFont) {
    context.font = fontSize4 + "px 'rhymesPseudo1', Arial, sans-serif";
} else {
    context.font = fontSize4 + "px 'rhymesPseudo', Arial, sans-serif";
}
    }

    var textMetricsPart = context.measureText(textPart);
    context.fillText(textPart, startX, y4);

    // Обновляем текущую позицию x для следующей части текста
    startX += textMetricsPart.width;
}
			var bgImageWater = new Image();
			bgImageWater.src = "assets/Water.png";
			bgImageWater.onload = function () {
			var waterMarkCheckbox = document.getElementById("waterMark");
			
            if (!waterMarkCheckbox.checked) {
				 context.drawImage(bgImageWater, 0,0, canvas.width, canvas.height);
				 console.log("Нарисовал вотерку");
            }
			}
}

            };
        };
    }


// Обработчик для кнопки
document.getElementById("generate-button").addEventListener("click", generateImage);

document.addEventListener("click", function() {
  generateImage();
});

// Обработчик для нажатия клавиши
document.addEventListener("keydown", function(event) {
    generateImage();
});

var saveButton = document.getElementById("save-button");
var canvas = document.getElementById("image-canvas");
console.log(canvas);
saveButton.addEventListener("click", function () {
    canvas.toBlob(function (blob) {
        var url = URL.createObjectURL(blob);

        // Создаем временную ссылку для скачивания
        var downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = "generated-image.png"; // Имя файла для сохранения

        // Симулируем клик по элементу <a> для начала скачивания
        downloadLink.click();

        // Освобождаем ресурсы
        URL.revokeObjectURL(url);
    });
});



