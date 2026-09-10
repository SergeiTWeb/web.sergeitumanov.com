<?php

/**
 * View Class
 */
class View
{
    /**
     * Generate page
     * @param string $contentView Content view file
     * @param string $templateView Template view file
     * @param array|null $data Data to pass to view
     */
    public function generate($contentView, $templateView, $data = null)
    {
        // Extract data to variables
        if (is_array($data)) {
            extract($data, EXTR_SKIP);
        }
        
        // Include template
        require_once 'application/views/' . $templateView;
    }
}