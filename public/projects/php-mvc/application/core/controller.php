<?php

/**
 * Base Controller Class
 */
abstract class Controller
{
    protected $model;
    protected $view;
    
    public function __construct()
    {
        $this->view = new View();
    }
    
    /**
     * Default action
     */
    abstract public function action_index();
}