import React from "react";

type MessageProps = {
  children: string;
};

const Message = ({ children }: MessageProps) => {
  return (
    <p style={{ maxWidth: "16ch" }} className="p-2 break-words bg-orange-400 rounded-2xl rounded-br-none">
      {children}
    </p>
  );
};

export default Message;
