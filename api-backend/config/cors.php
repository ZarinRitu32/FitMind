<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | This configuration allows your frontend to access your Laravel API.
    |
    */

    // Which routes should support CORS
    'paths' => ['*'],

    // Which HTTP methods are allowed
    'allowed_methods' => ['*'],

    // Which origins are allowed (frontend URLs)
    'allowed_origins' => [
        'http://localhost:5174',   // your current frontend
        'http://localhost:5173',   // optional: previous frontend port
    ],

    // Allowed origins using regex patterns (optional)
    'allowed_origins_patterns' => [],

    // Which headers can be sent from frontend
    'allowed_headers' => ['*'],

    // Which headers can be read by frontend
    'exposed_headers' => [],

    // How long the results of preflight requests can be cached
    'max_age' => 0,

    // Allow sending cookies/auth headers
    'supports_credentials' => true,

];
