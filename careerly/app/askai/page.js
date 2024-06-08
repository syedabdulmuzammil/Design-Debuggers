"use client";
import React, { useState } from "react";
import talkWith from "@/api/talkwith";
const Page = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const sendMessage = async () => {
    if (input.trim() === "") return;
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");
    try {
      const data = await talkWith(input);
      const botMessage = { role: "bot", content: data };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <div className="flex flex-col w-full pt-[5rem] font-Matter  mx-auto border border-gray-300 rounded-lg overflow-hidden">
      <div className="flex-1 p-4 overflow-y-auto  ">
        <div className="h-[70vh]">
          {messages.map((msg, index) => (
            <div
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              } `}
            >
              <div
                key={index}
                className={`py-3 px-6 my-2 rounded-full ${
                  msg.role === "user"
                    ? " border border-gray-300 w-max relative right-0 text-white text-right self-end"
                    : "bg-gray-300 w-max text-black self-start"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex p-4  border-t w-[50rem] mx-auto border-gray-300">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-300 text-black rounded-full mr-2"
        />
        <button
          onClick={sendMessage}
          className="py-2 px-4 bg-blue-500 text-white rounded-full"
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default Page;
