import React from "react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 md:px-24 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">
          Contact Us
        </h1>

        <p className="mb-6 text-lg text-center">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you!
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-semibold">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold">Message</label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
