<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Member;

class CommunityController extends Controller
{
    public function getPosts()
    {
        $posts = Post::all();
        return response()->json($posts);
    }

    public function getMembers()
    {
        $members = Member::all();
        return response()->json($members);
    }
}
