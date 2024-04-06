import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <ul className="nav justify-content-end">
      <div
        className="image_nav"
        style={{ marginRight: "auto", marginLeft: "10px" }}
      >
        <a href="home">
          <img src="../../Images/ids.png" alt="IDS" width="60" height="40" />
        </a>
      </div>

      <li className="nav-item">
        <a className="nav-link" aria-current="page" href="home">
          HOME
        </a>
      </li>

      <span className="separator">|</span>

      <li className="nav-item">
        <a className="nav-link" href="event">
          EVENT
        </a>
      </li>

      <span className="separator">|</span>

      <li className="nav-item">
        <a className="nav-link" href="rules">
          RULES
        </a>
      </li>

      <span className="separator">|</span>

      <li className="nav-item">
        <a className="nav-link" href="judges">
          JUDGES
        </a>
      </li>

      <span className="separator">|</span>

      <li className="nav-item">
        <a className="nav-link" href="shops">
          SHOPS
        </a>
      </li>

      <span className="separator">|</span>

      <div class="dropdown">
        <a
          className="nav-link active"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => navigate("/gallery")}
        >
          MEDIA
        </a>
        <ul class="dropdown-menu dropdown-menu-dark">
          <li>
            <a
              class="dropdown-item active"
              onClick={() => navigate("/gallery")}
            >
              Gallery
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="news">
              News
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="videos">
              Videos
            </a>
          </li>
        </ul>
      </div>

      <span className="separator">|</span>

      <li className="nav-item">
        <a className="nav-link" href="about">
          ABOUT US
        </a>
      </li>

      <span className="separator">|</span>

      <li className="nav-item">
        <a className="nav-link" href="contact">
          CONTACT US
        </a>
      </li>
      <div className="image_nav2" style={{ marginRight: "10px" }}>
        <a href="profile">
          <img
            src="../../Images/profile.png"
            alt="IDS"
            width="40"
            height="40"
          />
        </a>
      </div>
    </ul>
  );
}
export default Header;
