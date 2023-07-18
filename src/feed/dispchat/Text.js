import React, { useState } from "react";
import "./Text.css";
// import ReplyIcon from "@mui/icons-material/Reply";
import SendIcon from "@mui/icons-material/Send";
import { Avatar } from "@mui/material";
import Dispchat from "./Dispchat";
import {addDoc , collection} from "firebase/firestore"
import {auth, db} from "../../Firebase"
import {useAuthState} from "react-firebase-hooks/auth"


function Text({onChatPage}) {
  const [user] = useAuthState(auth)
  const [msgtxt, setmsgtxt] = useState("");
  const chatRef = collection(db , "chats")

  const massages = (event) => {
    setmsgtxt(event.target.value);
  };

  const updatemsg = async() => {
    await addDoc(chatRef , {
      username: user?.displayName,
      userId : user?.uid,
      description : msgtxt
    })
    // setmsgarr([...msgarr, msgtxt]);
  };



  //   const deletetask = (list)=>{
  //     const newlist = task.filter((task) => {
  //       return task !== list;
  //     })
  //     settask(newlist);
  //   }
  return (
    <div className="text">
      <div className="text_title">CHATS</div>
      <div className="text_users">

        <div className="text_user">
          <div className="text_left">
            <span className="avatar">
              <Avatar>
                {user?.displayName.charAt(0).toUpperCase()}
              </Avatar>
            </span>
            <div className="user_info">
              <span className="user_name">{user?.displayName}</span>
              <textarea placeholder="Text" onChange={massages} />
            </div>
          </div>
          <button className="send" onClick={updatemsg}>
            <SendIcon />
          </button>
        </div>

        <Dispchat />

        
      </div>
    </div>
  );
}

export default Text;
