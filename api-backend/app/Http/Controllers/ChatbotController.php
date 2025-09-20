<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ChatbotController extends Controller
{
    public function chat(Request $request)
    {
        $userMessage = $request->input('message');

        /*// ========================
        // Option 1: OpenAI
        // ========================
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . env('OPENAI_API_KEY'),
        ])->post('https://api.openai.com/v1/chat/completions', [
            'model' => 'gpt-4o-mini', // lightweight GPT-4
            'messages' => [
                ['role' => 'system', 'content' => 'You are FitMind assistant chatbot.'],
                ['role' => 'user', 'content' => $userMessage],
            ],
        ]);

        $botReply = $response->json('choices.0.message.content');
*/
        // ========================
        // Option 2: Gemini
        // ========================
        
        $response = Http::withHeaders([
            'Content-Type' => 'application/json',
            'x-goog-api-key' => env('GEMINI_API_KEY'),
        ])->post('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', [
            'contents' => [[
                'parts' => [[ 'text' => $userMessage ]]
            ]]
        ]);

        $botReply = $response->json('candidates.0.content.parts.0.text');
        

        return response()->json([
            'reply' => $botReply ?? "Sorry, I couldn't process your request."
        ]);
    }
}
