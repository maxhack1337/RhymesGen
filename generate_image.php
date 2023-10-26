<?php
// Получить параметры из запроса
$text = $_GET['text'];
$fontSize = $_GET['fontSize'];
$textColor = $_GET['textColor'];

// Создать изображение
$image = imagecreate(800, 400);
$backgroundColor = imagecolorallocate($image, 255, 255, 255);
$color = imagecolorallocate($image, 0, 0, 0);
$font = "arial.ttf"; // Укажите путь к шрифту

// Нарисовать текст на изображении
imagettftext($image, $fontSize, 0, 10, 100, $color, $font, $text);

// Отправить изображение в формате PNG
header("Content-type: image/png");
imagepng($image);

// Освободить ресурсы
imagedestroy($image);
?>
