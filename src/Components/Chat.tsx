import React from "react";
import Message from "./Message";

const Chat = () => {
  return (
    <div className="children-center h-screen w-screen absolute top-0 left-0">
      <div className="bg-custom-secondary p-6 rounded-2xl">
        <div>
          <button className="btn mb-2">Exit room</button>
        </div>
        <div
          style={{ height: "20rem", minWidth: "20rem" }}
          className="bg-custom-light input mb-2 overflow-y-scroll"
        >
            <Message>ewewqeewqewweeqwewwwewqewqewqewqweqeqewqweqweeqew</Message>
        </div>
        <div className="flex">
          <input type="text" className="flex-1 input me-2" />
          <button className="btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
