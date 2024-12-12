"use client"

import React, { useState } from 'react';

const ChatPage = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-md p-4 border rounded shadow-md">
                <div className="h-64 overflow-y-auto mb-4">
                    {messages.map((message, index) => (
                        <div key={index} className="p-2 my-2 bg-gray-200 rounded">
                            {message}
                        </div>
                    ))}
                </div>
                <div className="flex">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 p-2 border rounded"
                        placeholder="Type your message..."
                    />
                    <button
                        onClick={handleSend}
                        className="ml-2 p-2 bg-blue-500 text-white rounded"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;