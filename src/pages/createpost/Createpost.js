import React, { useState } from "react";
import { Button } from "@mui/material";
import "./Createpost.css";
import Showpost from "./Showpost";
import { addDoc ,collection } from "firebase/firestore";
import { auth, db } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

function Createpost() {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const [image , setimage] = useState("")
  const [imgdis , setimgdis] = useState("")
  const [displaypost , setdisplaypost] = useState(false)
  const [text , settext]  = useState(false)

  const photoRef = collection(db , "photos")

  const handleupload = async() =>{
    await addDoc(photoRef , {
      user : user.displayName,
      userId : user.uid,
      photoURL : image,
      photoDis : imgdis,
    })
    navigate("/")
  }

  return (
    <div className="createpost">
      <div className="create_left">
        <span>Create Your Post</span>
        <input type="text" placeholder="URL Of The Image" onChange={(e)=>{setimage(e.target.value); settext(!text)}}/>
        <input type="text" placeholder="Discription" onChange={(e)=>{setimgdis(e.target.value)}}/>
        {displaypost ? text ? <Button onClick={handleupload}>Uplode Post</Button> : <Button onClick={()=>{setdisplaypost(!displaypost)}}>Genrate Post</Button>:<Button onClick={()=>{setdisplaypost(!displaypost)}}>Genrate Post</Button>}
      </div>

      <div className="create_right">
        {displaypost && <Showpost image = {image} imgdis = {imgdis}/> }
      </div>
    </div>
  );
}

export default Createpost;
