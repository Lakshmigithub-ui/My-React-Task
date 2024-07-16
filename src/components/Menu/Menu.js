import { Link } from "react-router-dom";
import navstyle from "./navstyle.css";
import logo from "../../Assets/logo.png";
import search from "../../Assets/search.png";
import notification from "../../Assets/notification.jpg";
import profile from "../../Assets/profile.jpeg";

function Menu() {
  return (
    <>
      <nav className="nav">
        <div className="navbar-right">
          <img src={logo} style={{ width: "50px", height: "50px" }} />
        </div>

        <div className="navbar-middle">
          <Link className="nav-color" style={{ textDecoration: 'none' }} to="/">
            Home
          </Link>
          <Link className="nav-color" style={{ textDecoration: 'none' }} to="Videoplayer">
            Player
          </Link>
          <Link className="nav-color" style={{ textDecoration: 'none' }} to="ContactForm">
            Form
          </Link>
          <Link className="nav-color" style={{ textDecoration: 'none' }} to="InstaVideo">
            Videos
          </Link>
          <Link className="nav-color" style={{ textDecoration: 'none' }} to="Integrateform">
            API
          </Link>

        </div>

        <div className="navbar-right">
          <div className="search">
            <input type="text" placeholder="Search" />
            <img
              src={search}
              alt=""
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <img src={notification} style={{ width: "40px", height: "40px" }} />
          <img src={profile} style={{ width: "40px", height: "40px" }} />
        </div>
      </nav>
    </>
  );
}

export default Menu;
