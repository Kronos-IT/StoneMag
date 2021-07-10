<?php
    $msg_box = ""; 
    $errors = array(); 

    // если форма без ошибок
    if(empty($errors)){     
        // собираем данные из формы
        $message = "Имя: " . $_POST['user_name'] . "<br/> Номер телефона: " . $_POST['user_tel'];
        send_mail($message); // отправим письмо
    }
     
    // функция отправки письма
    function send_mail($message){
        // почта, на которую придет письмо
        $mail_to = "evgeni.salykin@gmail.com"; 
        // тема письма
        $subject = "Заявка на бесплатный замер";
         
        // заголовок письма
        $headers= "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
        $headers .= "From: <stavr951@gmail.com>\r\n"; // от кого письмо
         
        // отправляем письмо 
        mail($mail_to, $subject, $message, $headers);
    }
    
?>

<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1632831326:AAGKs20LYuueCpRFw1PKTwwuZrbjPASmtT0";

//Сюда вставляем chat_id
$chat_id = "-585000924";

//Определяем переменные для передачи данных из нашей формы
    $name = ($_POST['user_name']);
    $phone = ($_POST['user_tel']);
//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Имя:' => $name,
        'Телефон:' => $phone
    );

//Настраиваем внешний вид сообщения в телеграме
    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

//Передаем данные боту
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>

<?php
// формируем запись в таблицу google (изменить)
$url = "https://docs.google.com/forms/d/17I_-QBP8ftMwyOtciFvtjSbjOZi512qOgB-9lomuA9E/formResponse";

// массив данных (изменить entry, draft и fbzx)
$post_data = array (
 "entry.1559571872" => $_POST['user_name'],
 "entry.1933799947" => $_POST['user_tel'],
 "draftResponse" => "[,,&quot;-1387547899347576959&quot;]",
 "pageHistory" => "0",
 "fbzx" => "-1387547899347576959"
);

// Далее не трогать
// с помощью CURL заносим данные в таблицу google
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// указываем, что у нас POST запрос
curl_setopt($ch, CURLOPT_POST, 1);
// добавляем переменные
curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
//заполняем таблицу google
$output = curl_exec($ch);
curl_close($ch);

?>