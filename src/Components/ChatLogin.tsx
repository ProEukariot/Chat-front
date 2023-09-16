import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Socket } from "socket.io-client";

type ChatLoginProps = {
  setUser: React.Dispatch<React.SetStateAction<string>>;
  setRoom: React.Dispatch<React.SetStateAction<string>>;
  socket: Socket;
};

const ChatLogin = ({ setUser, setRoom, socket }: ChatLoginProps) => {
  const [userInput, setUserInput] = useState("");
  const [roomInput, setRoomInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userInput && roomInput) {
      setUser(userInput);
      setRoom(roomInput);

      socket.connect();
      socket.emit("join_room", roomInput);
      navigate("/Chat");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-custom-secondary p-4 rounded-2xl"
    >
      <div className="flex items-center mb-2">
        <label className="me-2">User</label>
        <input
          type="text"
          className="input flex-1"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
      <div className="flex items-center mb-2">
        <label className="me-2">Room</label>
        <input
          type="text"
          className="input flex-1"
          value={roomInput}
          onChange={(e) => setRoomInput(e.target.value)}
        />
      </div>
      <button className="btn">Go chat</button>
    </form>
  );
};

export default ChatLogin;
