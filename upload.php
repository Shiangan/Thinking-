<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>提交訃聞資訊</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 80%;
            margin: auto;
            padding: 20px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            margin-top: 50px;
        }
        .header {
            text-align: center;
            padding: 20px;
        }
        .header h1 {
            margin: 0;
            color: #333;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #555;
        }
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .form-group textarea {
            height: 100px;
            resize: vertical;
        }
        .form-group input[type="file"] {
            padding: 0;
        }
        .submit-btn {
            display: block;
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
            text-align: center;
            border: none;
            cursor: pointer;
        }
        .submit-btn:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>提交訃聞資訊</h1>
        </div>
        <form id="obituaryForm" enctype="multipart/form-data">
            <div class="form-group">
                <label for="name">亡者姓名</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="dateOfBirth">出生日期</label>
                <input type="date" id="dateOfBirth" name="dateOfBirth" required>
            </div>
            <div class="form-group">
                <label for="dateOfDeath">過世日期</label>
                <input type="date" id="dateOfDeath" name="dateOfDeath" required>
            </div>
            <div class="form-group">
                <label for="bio">生平介紹</label>
                <textarea id="bio" name="bio" required></textarea>
            </div>
            <div class="form-group">
                <label for="burialLocation">安靈地點圖片</label>
                <input type="file" id="burialLocation" name="burialLocation">
            </div>
            <div class="form-group">
                <label for="farewellLocation">告別式地點圖片</label>
                <input type="file" id="farewellLocation" name="farewellLocation">
            </div>
            <div class="form-group">
                <label for="photos">追思照片</label>
                <input type="file" id="photos" name="photos" multiple>
            </div>
            <div class="form-group">
                <label for="music">背景音樂</label>
                <input type="file" id="music" name="music" accept="audio/*">
            </div>
            <button type="submit" class="submit-btn">提交訃聞資訊</button>
        </form>
    </div>
    <script>
        document.getElementById('obituaryForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(this);

            // Handle file uploads
            fetch('upload.php', { // Replace with your server-side upload handler
                method: 'POST',
                body: formData
            }).then(response => response.json())
              .then(data => {
                  // Assume data contains the URLs for uploaded files
                  const queryParams = new URLSearchParams(data).toString();
                  window.location.href = `obituary.html?${queryParams}`;
              });
        });
    </script>
</body>
</html>
