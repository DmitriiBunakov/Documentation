<?php
header("Content-Type: text/event-stream");
header("Cache-Control: no-cache");
header("Connection: keep-alive");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");


// Функция для отправки данных клиенту
function sendEvent($id, $data, $event = 'message') {
    echo "id: $id" . PHP_EOL;
    echo "event: $event" . PHP_EOL;
    echo "data: $data" . PHP_EOL;
    echo PHP_EOL;
    ob_flush();
    flush();
}

// Пример отправки данных каждую секунду
$i = 0;
while (true) {
    sendEvent($i++, date('H:i:s'));
    sleep(1);
}
?>
