
import React, { useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";
import logo from "../../assets/logo.jpg";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
// import profile_icon from "../../assets/jack.png";
import profile_icon from "../../assets/jack.jpg";
import { Link, useNavigate } from "react-router-dom";


const Navbar = ({ setSidebar }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/Search/${input}`);
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
          src={menu_icon}
          alt=""
        />
        <Link to={"/"}>
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <form onSubmit={handleSearch}>
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search"
            />
            <img className="search-icon" src={search_icon} alt="" />
          </form>
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;

