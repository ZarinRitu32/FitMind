import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋! I'm your FitMind Assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  // message পাঠানো এবং Gemini API থেকে response পাওয়া
  const handleSend = async () => {
    if (!input.trim()) return;

    // user message add করা
    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    try {
      // Laravel backend এর /api/chat call
      const res = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      // bot response add করা
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply || "Sorry, no response from server.",
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Error connecting to server." },
      ]);
    }

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5">
      {isOpen ? (
        <div className="bg-white shadow-lg rounded-lg w-80 h-96 flex flex-col">
          {/* Header */}
          <div className="bg-green-600 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
            <h3 className="font-bold">FitMind Chatbot</h3>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-xs ${
                  msg.sender === "user"
                    ? "bg-blue-100 self-end ml-auto"
                    : "bg-gray-100"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-2 flex space-x-2 border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 border rounded px-2 py-1 text-sm"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="bg-green-600 text-white px-3 py-1 rounded"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700"
        >
          💬 Chat
        </button>
      )}
    </div>
  );
}
