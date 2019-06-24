<?php
if ( isset( $_POST['nameUma'] ) && isset( $_POST['emailUma']) ) {
    //сохранение формы
    $result = array('status' => 'start', 'error' => 'Сохранение не произошло!');
    try {
        $filteredEmail = filter_input(INPUT_POST, 'emailUma', FILTER_VALIDATE_EMAIL);
        if ( !$filteredEmail ) {
            $result['status'] = 'error';
            $result['error'] = 'Поле Email заполнено неверно!';
        }
        $filteredName = filter_input(INPUT_POST, 'nameUma', FILTER_SANITIZE_STRING, array(FILTER_FLAG_ENCODE_LOW, FILTER_FLAG_ENCODE_HIGH));
        if ( !$filteredName ) {
            $result['status'] = 'error';
            $result['error'] = 'Поле "Имя" заполнено неверно!';
        }
        if ($result['status'] != 'error') {
            $newForm = "{$filteredName},{$filteredEmail}".PHP_EOL;
            $writeRes = file_put_contents('/data/www/challenge/data/data.csv', $newForm, FILE_APPEND | LOCK_EX);
            if ( !$writeRes ) {
                $result['status'] = 'error';
                $result['error'] = 'Сохранение не удалось, попробуйте ещё раз!';
            } else {
                $result['status'] = 'success';
                $result['error'] = '';
            }
        }
    } catch (Exception $e) {
        $result['error'] = $e->getMessage();
        $result['status'] = 'error';
    }
    header('Content-type: application/json');
    echo json_encode($result);
} elseif ($_GET['testwrite'] == '1') {
    if (!isset($_SERVER['PHP_AUTH_USER'])) {
        header('WWW-Authenticate: Basic realm="ChallengeUma"');
        header('HTTP/1.0 401 Unauthorized');
        echo 'Wrong auth';
        exit;
    } else {
        if ( $_SERVER['PHP_AUTH_USER'] != 'dtakvel' || $_SERVER['PHP_AUTH_PW'] != 'UfXJhq7j2WYJLVfem2w' ) {
            echo 'Wrong auth';
        } else {
            $fileContents = file_get_contents ( '/data/www/challenge/data/data.csv' );
            echo '<pre>'.$fileContents.'</pre>';
        }
    }
} else {
    //показ страницы
    include('index.html');
}