import React, { useEffect, useState } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Post() {
  const [user] = useAuthState(auth)
  const postref = collection(db, "photos");
  const [postlist, setpostlist] = useState(null);

  const getpost = async () => {
    const data = await getDocs(postref);
    setpostlist(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));

  };

  useEffect(()=>{
    getpost()
  } , [])

  const likesref = collection(db , "likes")


  const addlike = async()=>{
    await addDoc(likesref , {
      userId: user.uid,
      // PostId: postlist.id,
    })
    // console.log(postlist.id)
    // i ma not able to get the id 
  }


  return (
    <div>
      {postlist?.map((post) => {
        return (
          <div className="post">
            <div className="post_header">
              <div className="post_info">
                <Avatar className="avatar">
                  {post.user.charAt(0).toUpperCase()}
                </Avatar>
                {post.user} ~ <span>0Hr</span>
              </div>
              <MoreVertIcon />
            </div>

            <div className="post_image">
              <img src={post.photoURL} alt="" />
            </div>

            <div className="post_footer">
              <div className="post_footerIcons">
                <div className="post_lefticons">
                 <button className="post_btn" onClick={addlike}><ThumbUpOffAltIcon className="post_icons" /></button> 
                  Liked By 0 people
                </div>
                <div className="post_rightIcons">
                  <TurnedInNotIcon className="post_icons" />
                </div>
              </div>
            </div>
            <div className="post_discription">
              <span>{post.photoDis}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
