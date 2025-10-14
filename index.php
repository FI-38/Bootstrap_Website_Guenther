<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Bootstrap-SPA</title>
  <link rel="stylesheet" href="static/css/bootstrap.min.css">
  <link rel="stylesheet" href="static/styles.css"/>
  <link rel="stylesheet" href="static/css/bootstrap-icons.css">
  <link rel="preload" href="script.js" as="script"/>
</head>
<body>
  <div class="burger-container">
    <input type="checkbox" id="burger-toggle" />
    <label for="burger-toggle" class="burger">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <nav class="menu">
      <a href="#" data-page="start.html">Start</a>
      <a href="#" data-page="about.html">Über mich</a>
      <a href="#" data-page="test.html">Test</a>
      <a href="#" data-page="kontakt.html">Kontakt</a>
      <a href="#" data-page="impressum.html">Impressum</a>
    </nav>
  </div>
  <div class="container mt-4" id="spa-content">
  </div>
  <script src="static/js/bootstrap.bundle.min.js"></script>
  <script src="script.js" defer></script>
</body>
</html>