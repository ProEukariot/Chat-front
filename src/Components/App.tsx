import React, { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
import ChatLogin from "./ChatLogin";
import Chat from "./Chat";

const socket = io("http://localhost:3001", {
  autoConnect: false,
});

function App() {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");

  return (
    <BrowserRouter>
      <div className="relative w-screen h-screen children-center">
        <Routes>
          <Route
            path="/"
            element={
              <ChatLogin setUser={setUser} setRoom={setRoom} socket={socket} />
            }
          ></Route>
          <Route
            path="/chat"
            element={<Chat user={user} room={room} socket={socket} />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
