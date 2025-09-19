<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use App\Models\Recipe;
use App\Models\Expert;

class NutritionController extends Controller
{
    /**
     * GET /api/articles
     * Return all articles
     */
    public function articles()
    {
        $articles = Article::all();

        return response()->json([
            'status' => 'success',
            'count' => $articles->count(),
            'data' => $articles
        ], 200);
    }

    /**
     * GET /api/recipes
     * Return all recipes
     */
    public function recipes()
    {
        $recipes = Recipe::all();

        return response()->json([
            'status' => 'success',
            'count' => $recipes->count(),
            'data' => $recipes
        ], 200);
    }

    /**
     * GET /api/experts
     * Return all experts
     */
    public function experts()
    {
        $experts = Expert::all();

        return response()->json([
            'status' => 'success',
            'count' => $experts->count(),
            'data' => $experts
        ], 200);
    }

    /**
     * GET /api/nutrition
     * Return sample nutrition data
     */
    public function nutrition()
    {
        $nutritionData = [
            ['name' => 'Apple', 'calories' => 52],
            ['name' => 'Banana', 'calories' => 96],
            ['name' => 'Carrot', 'calories' => 41],
        ];

        return response()->json([
            'status' => 'success',
            'count' => count($nutritionData),
            'data' => $nutritionData
        ], 200);
    }

    /**
     * Optional: GET single article by ID
     */
    public function showArticle($id)
    {
        $article = Article::find($id);

        if (!$article) {
            return response()->json([
                'status' => 'error',
                'message' => 'Article not found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $article
        ], 200);
    }

    /**
     * Optional: GET single recipe by ID
     */
    public function showRecipe($id)
    {
        $recipe = Recipe::find($id);

        if (!$recipe) {
            return response()->json([
                'status' => 'error',
                'message' => 'Recipe not found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $recipe
        ], 200);
    }

    /**
     * Optional: GET single expert by ID
     */
    public function showExpert($id)
    {
        $expert = Expert::find($id);

        if (!$expert) {
            return response()->json([
                'status' => 'error',
                'message' => 'Expert not found'
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $expert
        ], 200);
    }
}
