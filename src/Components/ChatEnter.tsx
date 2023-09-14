import React from "react";
import { createPortal } from "react-dom";

const ChatEnter = () => {
  return createPortal(
    <div className="children-center absolute w-screen h-screen top-0 left-0">
      <form
        style={{ maxWidth: "32rem" }}
        className="bg-custom-secondary p-6 rounded-2xl"
      >
        <div className="flex items-center mb-2">
          <label htmlFor="username" className="me-2">
            Username
          </label>
          <input type="text" id="usrname" className="input flex-1" />
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="roomId" className="me-2">
            Room ID
          </label>
          <input type="text" id="roomId" className="input flex-1" />
        </div>
        <button className="btn">Join</button>
      </form>
    </div>,
    document.getElementById("modal-root")!
  );
};

export default ChatEnter;
