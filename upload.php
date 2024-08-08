<?php
header('Content-Type: application/json');

// 设置上传目录
$uploadDir = 'uploads/';

// 确保上传目录存在
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

// 允许的文件类型
$allowedImageTypes = ['image/jpeg', 'image/png'];
$allowedAudioTypes = ['audio/mpeg', 'audio/mp3'];
$maxFileSize = 5 * 1024 * 1024; // 5MB

// 初始化上传文件的信息
$uploadedFiles = [];
$errors = [];

// 验证必填字段
if (empty($_POST['name'])) {
    $errors['name'] = '亡者姓名為必填項';
}
if (empty($_POST['dateOfBirth'])) {
    $errors['dateOfBirth'] = '出生日期為必填項';
}
if (empty($_POST['dateOfDeath'])) {
    $errors['dateOfDeath'] = '過世日期為必填項';
}
if (empty($_POST['bio'])) {
    $errors['bio'] = '生平介紹為必填項';
}

// 处理文件上传
foreach ($_FILES as $key => $file) {
    // 跳过空文件域
    if ($file['error'] === UPLOAD_ERR_NO_FILE) {
        continue;
    }

    // 检查文件上传是否成功
    if ($file['error'] === UPLOAD_ERR_OK) {
        // 验证文件类型和大小
        $fileType = mime_content_type($file['tmp_name']);
        if (in_array($fileType, $allowedImageTypes) || in_array($fileType, $allowedAudioTypes)) {
            if ($file['size'] <= $maxFileSize) {
                // 生成唯一文件名以避免覆盖
                $fileInfo = pathinfo($file['name']);
                $safeFileName = uniqid() . '.' . strtolower($fileInfo['extension']);
                $uploadFile = $uploadDir . $safeFileName;

                // 移动文件到目标目录
                if (move_uploaded_file($file['tmp_name'], $uploadFile)) {
                    $uploadedFiles[$key] = $uploadFile;
                } else {
                    $errors[$key] = '文件上传失败: ' . htmlspecialchars($file['name']);
                }
            } else {
                $errors[$key] = '文件过大: ' . htmlspecialchars($file['name']);
            }
        } else {
            $errors[$key] = '不允许的文件类型: ' . htmlspecialchars($file['name']);
        }
    } else {
        $errors[$key] = '上传错误: ' . $file['error'];
    }
}

// 生成查询字符串并检查完整性
if (empty($errors)) {
    $queryParams = http_build_query([
        'name' => $_POST['name'] ?? '',
        'dateOfBirth' => $_POST['dateOfBirth'] ?? '',
        'dateOfDeath' => $_POST['dateOfDeath'] ?? '',
        'bio' => $_POST['bio'] ?? '',
        'burialLocation' => $uploadedFiles['burialLocation'] ?? '',
        'farewellLocation' => $uploadedFiles['farewellLocation'] ?? '',
        'photos' => isset($uploadedFiles['photos']) ? implode(',', array_values($uploadedFiles['photos'])) : '',
        'music' => $uploadedFiles['music'] ?? '',
    ]);

    // 返回成功信息
    echo json_encode([
        'status' => 'success',
        'data' => $queryParams
    ]);
} else {
    // 返回错误信息
    echo json_encode([
        'status' => 'error',
        'errors' => $errors
    ]);
}
?>
