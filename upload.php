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
        // 生成唯一文件名以避免覆盖
        $uploadFile = $uploadDir . uniqid() . '-' . basename($file['name']);

        // 移动文件到目标目录
        if (move_uploaded_file($file['tmp_name'], $uploadFile)) {
            // 处理多个文件的情况
            if ($key === 'photos') {
                // 将多个文件路径以逗号分隔的形式保存
                $uploadedFiles[$key] = implode(',', array_map('basename', $_FILES['photos']['name']));
            } else {
                $uploadedFiles[$key] = $uploadFile;
            }
        } else {
            $uploadedFiles[$key] = '文件上传失败: ' . htmlspecialchars($file['name']);
        }
    } else {
        $uploadedFiles[$key] = '上传错误: ' . $file['error'];
    }
}

// 生成查询字符串
$queryParams = http_build_query([
    'burialLocation' => $uploadedFiles['burialLocation'] ?? '',
    'farewellLocation' => $uploadedFiles['farewellLocation'] ?? '',
    'photos' => $uploadedFiles['photos'] ?? '',
    'music' => $uploadedFiles['music'] ?? '',
]);

// 返回 JSON 数据
echo json_encode([
    'status' => 'success',
    'data' => $queryParams
]);
?>
