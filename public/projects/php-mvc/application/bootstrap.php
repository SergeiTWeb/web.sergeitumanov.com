<?php

/**
 * Application Bootstrap
 * Initialize core components and start routing
 */

// Error reporting (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Define base path
define('BASE_PATH', __DIR__ . '/../');

// Define base folder (HTTP -> HTTPS)
function getProtocol() {
    if (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') {
        return 'https';
    }
    if ($_SERVER['SERVER_PORT'] == 443) {
        return 'https';
    }
    if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
        return 'https';
    }
    return 'http';
}
define('BASE_URL', getProtocol() . '://' . $_SERVER['HTTP_HOST'] . '/phpmvc/');

/**
 * Autoloader for MVC classes
 * Handles: Core classes, Models, Controllers
 */
spl_autoload_register(function ($class) {
    
    // Core classes (Model, View, Controller, Route)
    $coreClasses = [
        'Model' => 'application/core/model.php',
        'View' => 'application/core/view.php',
        'Controller' => 'application/core/controller.php',
        'Route' => 'application/core/route.php'
    ];
    
    if (isset($coreClasses[$class])) {
        require_once BASE_PATH . $coreClasses[$class];
        return;
    }
    
    // Model classes: Model_Main, Model_Portfolio, etc.
    if (strpos($class, 'Model_') === 0) {
        $modelName = strtolower(str_replace('Model_', '', $class));
        $file = BASE_PATH . 'application/models/model_' . $modelName . '.php';
        if (file_exists($file)) {
            require_once $file;
            return;
        }
    }
    
    // Controller classes: Controller_Main, Controller_Portfolio, etc.
    if (strpos($class, 'Controller_') === 0) {
        $controllerName = strtolower(str_replace('Controller_', '', $class));
        $file = BASE_PATH . 'application/controllers/controller_' . $controllerName . '.php';
        if (file_exists($file)) {
            require_once $file;
            return;
        }
    }
});

// Start routing
Route::start();