import { type } from "os";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Socket } from "socket.io-client";
import Message from "./Message";

type ChatProps = {
  room: string;
  user: string;
  socket: Socket;
};

type ChatMsgs = {
  sender: string;
  room: string;
  message: string;
  timestamp: number;
};

const Chat = ({ room, user, socket }: ChatProps) => {
  const [message, setMessage] = useState("");
  const [chatMsgs, setChatMsgs] = useState<ChatMsgs[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!room || !user) navigate("/");

    socket.connect();
    console.log("Connected");

    socket.on("message", (data) => {
      setChatMsgs((curr) => [...curr, data]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [chatMsgs]);

  const sendMsg = (msg: string) => {
    if (!msg) return;

    const msgToSend = {
      sender: user,
      room: room,
      message: msg,
      timestamp: Date.now(),
    };

    socket.emit("message", msgToSend);

    setChatMsgs((curr) => [...curr, msgToSend]);
    inputRef.current?.focus();

    setMessage("");
  };

  const leaveRoom = () => {
    socket.emit("leave_room", room);
    socket.disconnect();
    navigate("/");
    console.log("Disconnected");
  };

  const scrollToBottom = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  return (
    <div className="bg-custom-secondary p-4 rounded-2xl">
      <div className="flex items-center">
        <h2 className="me-2 whitespace-nowrap">Room: {room}</h2>
        <button className="btn" onClick={() => leaveRoom()}>
          Leave room
        </button>
      </div>
      <div
        ref={chatContainerRef}
        className="h-[24rem] overflow-y-scroll bg-custom-light rounded-2xl my-2 p-2"
      >
        {chatMsgs.map((msg, i) => (
          <Message
            key={i}
            msg={msg.message}
            sender={msg.sender}
            user={user}
            timestamp={msg.timestamp}
          ></Message>
        ))}
      </div>
      <div className="flex">
        <input
          ref={inputRef}
          type="text"
          placeholder="Some text..."
          className="input flex-1 me-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && sendMsg(message);
          }}
        />
        <button className="btn" onClick={() => sendMsg(message)}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
