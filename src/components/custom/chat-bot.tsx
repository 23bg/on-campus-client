import React, { useState, useRef, useEffect } from "react";
import { Send, XCircle } from "lucide-react";

type ChatBotProps = {
  onClose: () => void;
};

const ChatBot: React.FC<ChatBotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: input },
        {
          sender: "bot",
          text: `You said: "${input}". (Replace this with real AI response)`,
        },
      ]);
    }, 600);

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-20 right-6 w-80 h-[28rem] bg-white dark:bg-zinc-950 border border-gray-300 dark:border-gray-700 rounded-xl shadow-xl z-50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between gap-2 p-3 border-b dark:border-zinc-800 bg-gray-100 dark:bg-zinc-900">
        <div className="flex items-center gap-2">
          <img
            src="https://github.com/iamprathameshmore.png"
            alt="bot"
            className="rounded-full h-6 w-6"
          />
          <span className="font-semibold text-lg">Support Chat</span>
        </div>
        <button onClick={onClose} className="text-gray-600 hover:text-red-600">
          <XCircle className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-3 overflow-y-auto space-y-3 text-sm">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <img
                src="https://github.com/iamprathameshmore.png"
                alt="bot"
                className="rounded-full h-5 w-5"
              />
            )}
            <div
              className={`max-w-[75%] px-3 py-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-green-600 text-white ml-auto"
                  : "bg-gray-200 dark:bg-zinc-800 text-black dark:text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-2 border-t dark:border-zinc-800 bg-gray-50 dark:bg-zinc-900 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 text-sm rounded-md bg-white dark:bg-zinc-800 border border-gray-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <button
          onClick={handleSend}
          className="p-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
