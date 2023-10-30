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

var bebasFont = new FontFace('bebasMain', 'url(bebasMain.woff2)');
var customFontMain1 = new FontFace('rhymesMain1', 'url(rhymesMain1.woff2)');
var customFontPseudo1 = new FontFace('rhymesPseudo1', 'url(rhymesPseudo1.woff2)');
var customFontMain = new FontFace('rhymesMain', 'url(rhymesMain.woff2)');
var customFontPseudo = new FontFace('rhymesPseudo', 'url(rhymesPseudo.woff2)');
var useAltFont = false;
var useBebas = false;

var altFontCheckbox = document.getElementById("altfont");
altFontCheckbox.addEventListener("change", function () {
	useBebas = bebasCheckbox.checked;
    useAltFont = altFontCheckbox.checked;
	if(document.getElementById("bebas").checked)
	{
		document.getElementById("bebas").checked = false;
	}
});

var bebasCheckbox = document.getElementById("bebas");
bebasCheckbox.addEventListener("change", function () {
    useBebas = bebasCheckbox.checked;
	useAltFont = altFontCheckbox.checked;
	if(document.getElementById("altfont").checked)
	{
		document.getElementById("altfont").checked = false;
	}
});


// Флаги для отслеживания загрузки каждого шрифта
var mainFontLoaded = false;
var pseudoFontLoaded = false;
var mainFontLoaded1 = false;
var pseudoFontLoaded1 = false;
var bebasLoaded = false;

Promise.all([customFontMain.load(), customFontPseudo.load(),customFontMain1.load(), customFontPseudo1.load(),bebasFont.load()]).then(function (loadedFonts) {
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
	if (loadedFonts[4].family === 'bebasMain') {
        bebasLoaded = true;
    }
});

function generateImage() {
    if (!(mainFontLoaded && pseudoFontLoaded && mainFontLoaded1 && pseudoFontLoaded1 && bebasLoaded)) {
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
} if(!useAltFont && !useBebas) {
    context.font = fontSize + "px 'rhymesMain', Arial, sans-serif";
}
if(useBebas)
{
	context.font = fontSize + "px 'bebasMain', Arial, sans-serif";
}
				var parts = text.split(/\((.*?)\)/); 
				var textMetrics = context.measureText(text);
				var startx = (canvas.width - textMetrics.width) / 2;
				for (var i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
        context.fillStyle = textColor; // Вернуть ваш цвет по умолчанию
    } else {
        context.fillStyle = "white"; // Установить белый цвет для текста в скобках
    }
				var textMetricsP = context.measureText(parts[i]);
				context.fillText(parts[i], startx, x); 
				startx += textMetricsP.width;
				}

                // Нарисовать текст на холсте
				
            

                if (useAltFont) {
    context.font = fontSize1 + "px 'rhymesMain1', Arial, sans-serif";
} if(!useAltFont && !useBebas) {
    context.font = fontSize1 + "px 'rhymesMain', Arial, sans-serif";
}
if(useBebas)
{
	context.font = fontSize1 + "px 'bebasMain', Arial, sans-serif";
}

				
				var y1 = parseInt(fontSize1) + x + 10;
				var parts1 = text1.split(/\((.*?)\)/); 
				var textMetrics1 = context.measureText(text1);
				var startx1 = (canvas.width - textMetrics1.width) / 2;
				for (var i = 0; i < parts1.length; i++) {
    if (i % 2 === 0) {
        context.fillStyle = textColor1; // Вернуть ваш цвет по умолчанию
    } else {
        context.fillStyle = "white"; // Установить белый цвет для текста в скобках
    }
				var textMetricsP1 = context.measureText(parts1[i]);
				context.fillText(parts1[i], startx1, y1); 
				startx1 += textMetricsP1.width;
				}

                if (useAltFont) {
    context.font = fontSize2 + "px 'rhymesMain1', Arial, sans-serif";
} if(!useAltFont && !useBebas) {
    context.font = fontSize2 + "px 'rhymesMain', Arial, sans-serif";
}
if(useBebas)
{
	context.font = fontSize2 + "px 'bebasMain', Arial, sans-serif";
}
                var y2 = parseInt(fontSize1) + parseInt(fontSize2) + x + 20;
				var parts2 = text2.split(/\((.*?)\)/); 
				var textMetrics2 = context.measureText(text2);
				var startx2 = (canvas.width - textMetrics2.width) / 2;
				for (var i = 0; i < parts2.length; i++) {
    if (i % 2 === 0) {
        context.fillStyle = textColor2; // Вернуть ваш цвет по умолчанию
    } else {
        context.fillStyle = "white"; // Установить белый цвет для текста в скобках
    }
				var textMetricsP2 = context.measureText(parts2[i]);
				context.fillText(parts2[i], startx2, y2); 
				startx2 += textMetricsP2.width;
				}

                if (useAltFont) {
    context.font = fontSize3 + "px 'rhymesMain1', Arial, sans-serif";
} if(!useAltFont && !useBebas) {
    context.font = fontSize3 + "px 'rhymesMain', Arial, sans-serif";
}
if(useBebas)
{
	context.font = fontSize3 + "px 'bebasMain', Arial, sans-serif";
}
                var y3 = parseInt(fontSize3) + parseInt(fontSize1) + parseInt(fontSize2) + x + 30;
				var parts3 = text3.split(/\((.*?)\)/); 
				var textMetrics3 = context.measureText(text3);
				var startx3 = (canvas.width - textMetrics3.width) / 2;
				for (var i = 0; i < parts3.length; i++) {
    if (i % 2 === 0) {
        context.fillStyle = textColor3; // Вернуть ваш цвет по умолчанию
    } else {
        context.fillStyle = "white"; // Установить белый цвет для текста в скобках
    }
				var textMetricsP3 = context.measureText(parts3[i]);
				context.fillText(parts3[i], startx3, y3); 
				startx3 += textMetricsP3.width;
				}
				
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
} if(!useAltFont && !useBebas) {
    context.font = fontSize4 + "px 'rhymesMain', Arial, sans-serif";
}
if(useBebas)
{
	context.font = fontSize4 + "px 'rhymesMain1', Arial, sans-serif";
}
    } else {
        if (useAltFont) {
    context.font = fontSize4 + "px 'rhymesPseudo1', Arial, sans-serif";
} if(!useAltFont && !useBebas) {
    context.font = fontSize4 + "px 'rhymesPseudo', Arial, sans-serif";
}
if(useBebas)
{
	context.font = fontSize4 + "px 'rhymesPseudo1', Arial, sans-serif";
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
} if(!useAltFont && !useBebas) {
    context.font = fontSize4 + "px 'rhymesMain', Arial, sans-serif";
}
if(useBebas)
{
	context.font = fontSize4 + "px 'rhymesMain1', Arial, sans-serif";
}
    } else {
        if (useAltFont) {
    context.font = fontSize4 + "px 'rhymesPseudo1', Arial, sans-serif";
} if(!useAltFont && !useBebas) {
    context.font = fontSize4 + "px 'rhymesPseudo', Arial, sans-serif";
}
if(useBebas)
{
	context.font = fontSize4 + "px 'rhymesPseudo1', Arial, sans-serif";
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
} if(!useAltFont && !useBebas) {
    context.font = fontSize4 + "px 'rhymesMain', Arial, sans-serif";
}
if(useBebas)
{
	context.font = fontSize4 + "px 'rhymesMain1', Arial, sans-serif";
}
    } else {
        if (useAltFont) {
    context.font = fontSize4 + "px 'rhymesPseudo1', Arial, sans-serif";
} if(!useAltFont && !useBebas) {
    context.font = fontSize4 + "px 'rhymesPseudo', Arial, sans-serif";
}
if(useBebas)
{
	context.font = fontSize4 + "px 'rhymesPseudo1', Arial, sans-serif";
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
document.getElementById("altfonttext").addEventListener("click", function(){
	if(!document.getElementById("altfont").checked)
	{
		document.getElementById("altfont").checked = true;
	}
	else
	{
		document.getElementById("altfont").checked = false;
	}
	if(document.getElementById("bebas").checked)
	{
		document.getElementById("bebas").checked = false;
	}
	useBebas = bebasCheckbox.checked;
    useAltFont = altFontCheckbox.checked;
});

document.getElementById("bebastext").addEventListener("click", function(){
	if(!document.getElementById("bebas").checked)
	{
		document.getElementById("bebas").checked = true;
	}
	else
	{
		document.getElementById("bebas").checked = false;
	}
	if(document.getElementById("altfont").checked)
	{
		document.getElementById("altfont").checked = false;
	}
	useBebas = bebasCheckbox.checked;
    useAltFont = altFontCheckbox.checked;
});

document.getElementById("watertext").addEventListener("click", function(){
	if(!document.getElementById("waterMark").checked)
	{
		document.getElementById("waterMark").checked = true;
	}
	else
	{
		document.getElementById("waterMark").checked = false;
	}
});


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



