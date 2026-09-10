<!-- MAIN  -->
<section class="hero">
    <h1><?= htmlspecialchars($data['title']) ?></h1>
    <p class="hero-subtitle"><?= htmlspecialchars($data['description']) ?></p>
    <a href="https://github.com/SergeiTWeb/phpMvc" class="btn btn-primary">Download on GitHub</a>
</section>

<section class="features" id="about">
    <h2>Why Choose This Template?</h2>
    <div class="features-grid">
        <?php foreach ($data['features'] as $feature): ?>
            <div class="feature-card">
                <div class="feature-icon">✓</div>
                <p><?= htmlspecialchars($feature) ?></p>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<section class="about">
    <h2>About This Project</h2>
    <p>
        This is a simple and lightweight MVC (Model-View-Controller) framework 
        built with pure PHP. It's designed for beginners who want to understand 
        how MVC architecture works and for developers who need a minimal starting 
        point for small projects.
    </p>
    <div class="about-features">
        <div class="about-item">
            <h3>📚 Easy to Learn</h3>
            <p>Clean code structure with detailed comments</p>
        </div>
        <div class="about-item">
            <h3>🚀 No Dependencies</h3>
            <p>Works out of the box with XAMPP or any PHP server</p>
        </div>
        <div class="about-item">
            <h3>📱 Responsive Design</h3>
            <p>Mobile-first CSS that works on all devices</p>
        </div>
    </div>
</section>

<section class="getting-started">
    <h2>Getting Started</h2>
    <div class="code-block">
        <pre><code>
            // Install XAMPP
            // Place files in htdocs folder
            // Open http://localhost/phpmvc/

            // Create new controller:
            // application/controllers/controller_yourpage.php

            // Create new model:
            // application/models/model_yourpage.php

            // Create new view:
            // application/views/yourpage_view.php

            // Debug:
            // Open http://localhost/phpmvc/debug.php
        </code></pre>
    </div>
    <a href="https://github.com/SergeiTWeb/phpMvc" class="btn btn-secondary">Download on GitHub</a>
</section>

<!-- CONTACTS  -->
<section class="contacts" id="contacts">
    <h1><?= htmlspecialchars($data['contacts_title']) ?></h1>
    <p class="section-intro">Contact links</p>
    
    <div class="contacts-grid">
        <div class="contact-card">
            <div class="contact-icon">📧</div>
            <h3>Email</h3>
            <a href="mailto:<?= htmlspecialchars($data['email']) ?>">
                <?= htmlspecialchars($data['email']) ?>
            </a>
        </div>
        
        <div class="contact-card">
            <div class="contact-icon">🌐</div>
            <h3>Website</h3>
            <a href="<?= htmlspecialchars($data['website']) ?>" target="_blank">
                <?= htmlspecialchars($data['website']) ?>
            </a>
        </div>
        
        <div class="contact-card">
            <div class="contact-icon">📍</div>
            <h3>Location</h3>
            <p><?= htmlspecialchars($data['address']) ?></p>
        </div>
    </div>
    
    <div class="social-links">
        <h3>Follow Me</h3>
        <div class="social-grid">
            <a href="<?= htmlspecialchars($data['social']['github']) ?>" class="social-link" target="_blank">GitHub</a>
            <a href="<?= htmlspecialchars($data['social']['linkedin']) ?>" class="social-link" target="_blank">LinkedIn</a>
        </div>
    </div>
</section>