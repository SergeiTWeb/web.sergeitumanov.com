<?php

/**
 * Main Controller (Home Page)
 */
class Controller_Main extends Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->model = new Model_Main();
    }
    
    public function action_index()
    {
        $data = $this->model->getData();
        $this->view->generate('main_view.php', 'template_view.php', $data);
    }
}