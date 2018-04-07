<?php

namespace App\Listdefs;

class Goals
{
  protected $class = 'Goal';
  public function getDefs()
  {
    return [
        'label' => 'Tee',
        'description' => 'This is a description'
    ]
  }
}