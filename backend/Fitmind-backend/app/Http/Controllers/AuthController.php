<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    // Show login page
    public function showLogin() {
        return view('login');
    }

    // Handle login
    public function login(Request $request) {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return back()->with('error', 'Invalid credentials');
        }

        Session::put('user', $user->id);
        return redirect('/dashboard');
    }

    // Show register page
    public function showRegister() {
        return view('register');
    }

    // Handle register
    public function register(Request $request) {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        Session::put('user', $user->id);
        return redirect('/dashboard');
    }

    // Dashboard page
    public function dashboard() {
        if (!Session::has('user')) {
            return redirect('/login');
        }

        $user = User::find(Session::get('user'));
        return view('dashboard', compact('user'));
    }

    // Logout
    public function logout() {
        Session::forget('user');
        return redirect('/login');
    }
}
