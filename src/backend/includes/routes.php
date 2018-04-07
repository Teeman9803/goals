<?php

$app = new \Slim\App;
// App group
$app->group('/api', function () use ($app) {
  // Version group
  $app->group('/v1', function () use ($app) {
     $app->get('/goals', 'App\\Controllers\\GoalsController:setMessage');
 });
});

$app->run();