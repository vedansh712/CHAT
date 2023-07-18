import React from "react";
import "./Navbar.css";

import CottageIcon from "@mui/icons-material/Cottage";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import ListIcon from "@mui/icons-material/List";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../Firebase";
import { logoutUser } from "../features/userSlice";
import { signOut } from "firebase/auth";
import {Link} from "react-router-dom";

function Navbar() {
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };

  return (
    <div className="navbar">
      <img
        className="navbar_logo"
        src="https://i.ibb.co/Y0YGrb2/In-Shot-20230616-220956970.jpg"
        alt=""
      />

      <div className="navbar_btn">

          <Link to="/">
          <button className="nav_btn">
            <CottageIcon />
            <span>Home</span>
          </button>
          </Link>

          <Link to="/chat">
          <button className="nav_btn">
            <BorderColorIcon />
            <span>Chat</span>
          </button>
          </Link>

          <Link to="/post">
          <button className="nav_btn">
            <CameraEnhanceIcon />
            <span>Post</span>
          </button>
          </Link>

          <button className="nav_btn">
            <SavedSearchIcon />
            <span>Search</span>
          </button>

      </div>
      <div className="navbar_more">
        <button className="nav_btn">
          <PersonPinIcon />
          <span>Profile</span>
        </button>

        <button className="nav_btn">
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "#"}
          </Avatar>
          <span>
            {user.username}
            <button onClick={handleLogout} className="logout_btn">
              Logout
            </button>
          </span>
        </button>

        <button className="nav_btn">
          <ListIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
