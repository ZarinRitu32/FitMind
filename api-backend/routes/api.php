<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\NutritionController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application.
|
*/

// ---------------- Public Routes ----------------
// Authentication
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Public Nutrition API (no auth required)
Route::get('/articles', [NutritionController::class, 'articles']);
Route::get('/articles/{id}', [NutritionController::class, 'showArticle']);

Route::get('/recipes', [NutritionController::class, 'recipes']);
Route::get('/recipes/{id}', [NutritionController::class, 'showRecipe']);

Route::get('/experts', [NutritionController::class, 'experts']);
Route::get('/experts/{id}', [NutritionController::class, 'showExpert']);

Route::get('/nutrition', [NutritionController::class, 'nutrition']); // Sample nutrition data

// ---------------- Protected Routes ----------------
Route::middleware('auth:sanctum')->group(function () {
    // User profile
    Route::get('/profile', [AuthController::class, 'getProfile']);
    Route::put('/profile', [AuthController::class, 'updateProfile']);

    // Optional: Recommendations based on user input (age, weight, goals, etc.)
    Route::get('/recommendations', [NutritionController::class, 'recommendations']);
});
