<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';
// ----------
$badIP = [];
$ipAddr = $_SERVER['REMOTE_ADDR'];
$today    = date('d-m-Y_H-i');
$name = $_POST['phone'];
//spam ловушка
$spam = $_POST['email'];
$spam1 = $_POST['name'];

// Настройки
$mail = new PHPMailer;
$mail->isSMTP(); 
$mail->Host = 'smtp.yandex.ru';  
$mail->SMTPAuth = true;                      
$mail->Username = 'avtopodborstas'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = 'revjtlwzwagfibmz'; // Ваш пароль от почты, настройка приложений
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('avtopodborstas@yandex.ru', 'Ремонт'); // Ваш Email, Имя
$mail->addAddress('avtopodborstas@yandex.ru'); // Email получателя
$mail->addAddress('avtopodborstas@yandex.ru'); // Еще один email, если нужно.

if(!in_array($ipAddr, $badIP) && empty($spam) && empty($spam1)) { // если не заполнено скрытое поле и если IP-адрес не находится в нашем чёрном списке

		// file_put_contents("send-mail.log", "\n{$today}\nIP:{$ipAddr}\nОт:{$name}\n", FILE_APPEND); chmod("send-mail.log", 0600);

		// если всё ок - отправляем письмо
		
            $mail->isHTML(true); 
            $mail->Subject = "Новая заявка"; // Заголовок письма
            $mail->Body =  "<p>Необходим выезд сантехника</p>
                            <hr/>
                            <p>к/т <b>$name</b></p>"; // Текст письма
}
else { // если роботом было заполнено скрытое поле или если IP-адрес в чёрном списке
    // file_put_contents("spam.log", "\n{$today}\nСпам бот\nIP:{$ipAddr}\n", FILE_APPEND); chmod("spam.log", 0600);
	exit(); // сразу выходим
}
// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
?>
   