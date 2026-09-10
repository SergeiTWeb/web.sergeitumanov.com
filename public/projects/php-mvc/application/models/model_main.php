<?php

/**
 * Main Model
 */
class Model_Main extends Model
{
    public function getData()
    {
        return [
            'title' => 'PHP MVC Template',
            'description' => 'Simple and lightweight MVC framework for PHP',
            'features' => [
                'Clear MVC structure (routes, controllers, models, views)',
                'Minimal boilerplate and easy to customize',
                'Responsive by default (CSS grid/flex)',
                'Ideal for learning MVC or building a personal site'
            ],

            // Сontacts data
            'contacts_title' => 'Get in Touch',
            'email' => 'sergeitumanov.web@gmail.com',
            'website' => 'https://web.sergeitumanov.com',
            'address' => 'Melbourne, Australia',
            'social' => [
                'github' => 'https://github.com/SergeiTWeb',
                'linkedin' => 'https://www.linkedin.com/in/sergei-tumanov'
            ]
        ];
    }
}