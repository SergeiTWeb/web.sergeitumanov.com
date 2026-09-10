<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($data['title'] ?? 'PHP MVC Template') ?></title>
    <link rel="stylesheet" href="css/phpmvcMain.css">
    <link rel="icon" type="image/svg+xml" href="img/favicon.svg">
</head>
<body>
    <header class="header">
        <nav class="nav container">
            <a href="/" class="logo">PHP MVC</a>
            <ul class="nav-menu">
                <li><a href="/portfolio" class="nav-link">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </nav>
    </header>

    <main class="main">
        <div class="container">
            <?php require_once 'application/views/' . $contentView; ?>
        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <p>PHP MVC Template. Open Source (MIT). Built by Sergei Tumanov, 2026.</p>
        </div>
    </footer>

    <script src="js/phpmvcMain.js"></script>
</body>
</html>