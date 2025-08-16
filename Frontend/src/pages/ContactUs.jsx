import React from "react";

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="w-full max-w-xs bg-white rounded-lg shadow-md p-4 text-gray-800 text-sm">
        {/* Header */}
        <div className="text-center mb-3">
          <h1 className="text-xl font-bold text-blue-600">Contact Us</h1>
          <p className="text-gray-500 mt-1 text-xs">
            We'd love to hear from you!
          </p>
        </div>

        {/* Form */}
        <form className="space-y-3">
          {/* Name */}
          <div>
            <label className="block mb-1 text-xs font-medium">Name</label>
            <input
              type="text"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 transition text-sm"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-xs font-medium">Email</label>
            <input
              type="email"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 transition text-sm"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 text-xs font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-400 transition text-sm"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded shadow-sm hover:from-blue-600 hover:to-purple-600 transition text-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
