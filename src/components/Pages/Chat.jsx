import React from 'react';
import { useState } from 'react';
import {io} from "socket.io-client";
import { useMemo } from 'react';
import { useEffect } from 'react';


const Chat = () => {
  const socket=useMemo(()=>io("https://back-ypmb.onrender.com"),[]);

  useEffect(()=>{
    socket.on("receive_message",(data)=>{
      setChat((prev)=>[...prev,data]);
    });
    return ()=>{
      socket.off("receive_message");
    };
  },[socket]);
    const [message,setMessage]=useState("");
    const [chat,setChat]=useState([]);
  

    const sendMessage=()=>{
        if(message.trim()==="")  return ;

        const newMsg={username:"You",message};
        
        socket.emit("userMessage",newMsg);
        setChat((prev)=>[...prev,newMsg]);
        setMessage("");
    }
  return (
  <div className="min-h-screen bg-gray-100 dark:bg-stone-950 flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-lg shadow-md p-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100 text-center">
        Customer Support Chat💬
      </h2>

      <div className="border rounded-lg h-100 overflow-y-auto mb-4 p-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-inner">
        {chat.map((msg, index) => (
          <div key={index} className="mb-2">
            <span className="font-semibold mr-1">{msg.username}:</span>
            <span>{msg.message}</span>
          </div>
        ))}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          value={message}
          placeholder="Type your message..."
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  </div>
);

}

export default Chat;
