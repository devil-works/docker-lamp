<?php
// $_POST の値をJSONにして返す簡単なお仕事
header('Content-Type: application/json; charset=utf-8');
echo json_encode(['id' => $_POST['shop_id']]);
exit();
?>