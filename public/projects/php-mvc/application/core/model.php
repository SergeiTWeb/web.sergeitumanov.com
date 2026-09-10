<?php

/**
 * Base Model Class
 */
class Model
{
    /**
     * Get data (override in child classes)
     * @return array
     */
    public function getData()
    {
        return [];
    }
}