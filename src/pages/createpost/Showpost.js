import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import "./Createpost.css";

function Showpost(props) {
  const user = useSelector((state) => state.data.user.user);
  return (
    <div>
      <div className="createpost_header">
        <div className="createpost_info">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "#"}
          </Avatar>
          <span>{user.username} ~ 0 hr</span>
        </div>
        <MoreVertIcon />
      </div>
      <div className="createpost_image">
        <img src={props.image} alt="Please Inset Valid URL" />
      </div>
      <div className="createpost_footer">
        <div className="createpost_footerIcons">
          <div className="createpost_lefticons">
            <ThumbUpOffAltIcon className="createpost_icons" />
            Liked By 0 people
          </div>
          <div className="createpost_rightIcons">
            <TurnedInNotIcon className="createpost_icons" />
          </div>
        </div>
      </div>
      <div className="createpost_discription">
        <span>{props.imgdis}</span>
      </div>
    </div>
  );
}

export default Showpost;
