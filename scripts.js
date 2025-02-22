<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Page</title>
  <style>
    body {
      margin: 0;
      background-color: black;
      font-family: Arial, sans-serif;
      color: white;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      text-align: center;
    }
  </style>
</head>
<body>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      var audio = document.getElementById('backgroundAudio');
      var backgroundVideo = document.getElementById('backgroundVideo');
      var profileCard = document.getElementById('profileCard');
      
      // Test button function
      window.testFunction = function() {
        alert('Test button clicked!');
      };
    });
  </script>
</body>
</html>
