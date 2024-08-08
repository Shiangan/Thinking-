<?php
header('Content-Type: application/json');

// 设置上传目录
$uploadDir = 'uploads/';

// 确保上传目录存在
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

// 初始化上传文件的信息
$uploadedFiles = [];

// 处理文件上传
foreach ($_FILES as $key => $file) {
    if ($file['error'] === UPLOAD_ERR_OK) {
        $uploadFile = $uploadDir . basename($file['name']);
        if (move_uploaded_file($file['tmp_name'], $uploadFile)) {
            $uploadedFiles[$key] = $uploadFile;
        } else {
            $uploadedFiles[$key] = '文件上传失败: ' . htmlspecialchars($file['name']);
        }
    } else {
        $uploadedFiles[$key] = '上传错误: ' . $file['error'];
    }
}

// 生成查询字符串
$queryParams = http_build_query($uploadedFiles);

// 返回 JSON 数据
echo json_encode($uploadedFiles);
?>
