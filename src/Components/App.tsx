import React from "react";
import ChatEnter from "./ChatEnter";
import Chat from "./Chat";

function App() {
  return (
    <div className="w-screen h-screen relative bg-custom-light">
      {false && <ChatEnter />}
      <Chat />
    </div>
  );
}

export default App;
