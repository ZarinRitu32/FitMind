import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Fetch posts
    axios.post("http://127.0.0.1:8000/api/community/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));

    // Fetch members
    axios.post("http://127.0.0.1:8000/api/community/members")
      .then((res) => setMembers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3 flex justify-center items-center gap-2">
           Fitness Community
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Connect, share, and grow stronger together. Join discussions, post your progress,
          and get motivated by other fitness enthusiasts.
        </p>
      </div>

      {/* Community Posts */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {posts.map((post) => (
          <div key={post.id} className="shadow-md rounded-2xl bg-white p-5 hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <img src={post.avatar} alt={post.user} className="w-10 h-10 rounded-full" />
              <h3 className="font-semibold">{post.user}</h3>
            </div>
            <p className="mb-4 text-gray-700">{post.content}</p>
            <div className="flex items-center text-gray-500 text-sm gap-2">
               {post.comments || 0} comments
            </div>
          </div>
        ))}
      </div>

      {/* Members Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold flex justify-center items-center gap-2 mb-4">
           Active Members
        </h2>
        <div className="flex justify-center gap-3">
          {members.map((m) => (
            <img key={m.id} src={m.avatar} alt={m.name} className="w-12 h-12 rounded-full border-2 border-white shadow-md" />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <button className="px-6 py-3 text-lg rounded-2xl shadow-lg bg-blue-500 text-white hover:bg-blue-600 transition">
          Join the Community
        </button>
      </div>
    </div>
  );
}
