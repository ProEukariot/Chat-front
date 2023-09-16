import React from "react";

type MessageProps = {
  msg: string;
  sender: string;
  user: string;
  timestamp: number;
};

const Message = ({ msg, sender, user, timestamp }: MessageProps) => {
  return (
    <div
      className={
        "flex mb-2 " + (sender === user ? "justify-end" : "justify-start")
      }
    >
      <div>
        <p
          className={
            "break-words text-center max-w-[16ch] bg-custom-main rounded-2xl p-2 " +
            (sender === user ? " rounded-br-none bg-orange-300" : "rounded-bl-none")
          }
        >
          {msg}
        </p>
        <p className="text-[0.5rem] mt-1">
          {sender} {new Date(timestamp).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default Message;
