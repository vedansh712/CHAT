import React from "react";
import "./HomePage.css";
import Navbar from "./navbar/Navbar";
import Feed from "./feed/Feed";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatroom from "./pages/Chatroom"
import Createpost from "./pages/createpost/Createpost";

function HomePage() {
  return (
    <div className="homePage" display>
      <Router>
        <div className="homePage_nav">
          <Navbar />
        </div>
        <div className="homePage_feed">
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/chat" element={<Chatroom/>} />
            <Route path="/post" element={<Createpost/>} />
          </Routes>
        </div>
      </Router>

      {/* <div className="homePage_nav">
            <Navbar />
        </div>
        <div className="homePage_feed">
            <Feed />
        </div> */}
    </div>
  );
}

export default HomePage;
