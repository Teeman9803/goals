<?php

namespace App\Controllers;

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

class GoalsController
{

  public function setMessage(Request $request, Response $response) {
             $response->getBody()->write("Here are your goals");

             return $response;
         }
}