import React, { useEffect, useState } from "react";
import "./Text.css";
import { Avatar } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";


function Dispchat() {
  const chatRef = collection(db, "chats");
  const [chatslist, setchatslist] = useState(null);

  const getchat = async () => {
    const data = await getDocs(chatRef);
    setchatslist(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getchat();

  }, []);
  return (
    <div>
      {chatslist?.map((chat) => {
        return (
          <div className="text_user">
            <div className="text_left">
              <div className="text_reply">
                <span className="avatar">
                  <Avatar>{chat.username.charAt(0).toUpperCase()}</Avatar>
                </span>
                <div className="user_info">
                  <span className="user_name">{chat.username}</span>
                  <div className="delete">
                    <div>
                    {chat.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Dispchat;
