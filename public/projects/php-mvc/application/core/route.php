<?php

/**
 * Router Class
 */
class Route
{
    /**
     * Start routing
     */
    public static function start()
    {
        // Default controller and action
        $controllerName = 'Main';
        $actionName = 'index';
        
        // Get path from URL, remove query string and trim slashes
        $path = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
        
        // Remove base folder name (e.g., 'phpmvc') if present
        $basePath = trim(str_replace('\\', '/', dirname($_SERVER['SCRIPT_NAME'])), '/');
        if (!empty($basePath) && strpos($path, $basePath) === 0) {
            $path = trim(substr($path, strlen($basePath)), '/');
        }
        
        // Parse remaining path
        if (!empty($path)) {
            $routes = array_filter(explode('/', $path));
            $routes = array_values($routes); // Re-index
            
            // Get controller name
            if (!empty($routes[0]) && $routes[0] !== 'index.php') {
                $controllerName = ucfirst(strtolower($routes[0]));
            }
            
            // Get action name
            if (!empty($routes[1])) {
                $actionName = $routes[1];
            }
        }
        
        // Build class and file names
        $controllerClass = 'Controller_' . $controllerName;
        $controllerFile = 'application/controllers/controller_' . strtolower($controllerName) . '.php';
        
        // Debug (remove in production)
        // error_log("Looking for: $controllerFile");
        
        // Check if controller exists
        if (!file_exists($controllerFile)) {
            // error_log("Controller not found: $controllerFile");
            self::error404();
            return;
        }
        
        // Include controller
        require_once $controllerFile;
        
        // Create controller instance
        $controller = new $controllerClass();
        $action = 'action_' . strtolower($actionName);
        
        // Check if action exists
        if (!method_exists($controller, $action)) {
            self::error404();
            return;
        }
        
        // Execute action
        $controller->$action();
    }
    
    /**
     * Show 404 error page
     */
    private static function error404()
    {
        http_response_code(404);
        
        $data = ['title' => '404 - Page Not Found'];
        $contentView = '404_view.php';
        $templateView = 'template_view.php';
        
        require_once 'application/views/' . $templateView;
    }
}