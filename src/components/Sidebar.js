// import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceLaughWink,
  faTachometerAlt,
  faCog,
  faWrench,
  faFolder,
  faChartArea,
  faTable,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import MenuDropdown from "./sidebar/MenuDropdown";
import { useState } from "react";

function Sidebar() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div
      className={
        toggleSidebar
          ? "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
          : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      }
      id="accordionSidebar"
    >
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <FontAwesomeIcon icon={faFaceLaughWink} />
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </Link>
      <hr className="sidebar-divider my-0" />
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <FontAwesomeIcon className="fas fa-fw" icon={faTachometerAlt} />
          <span> Dashboard</span>
        </Link>
      </li>
      <hr className="sidebar-divider"></hr>
      <div className="sidebar-heading">Interface</div>
      <li className="nav-item">
        <MenuDropdown
          icon={faCog}
          text="Components"
          subtext="custom components"
          data={[
            { id: "1", text: "Buttons", link: "/buttons" },
            { id: "2", text: "Cards", link: "/cards" },
          ]}
        />
      </li>
      <li className="nav-item">
        <MenuDropdown
          icon={faWrench}
          text="Utilities"
          subtext="custom utitlities"
          data={[
            { id: "1", text: "Colors", link: "/colors" },
            { id: "2", text: "Borders", link: "/borders" },
            { id: "3", text: "Animations", link: "/animations" },
            { id: "4", text: "Others", link: "/others" },
          ]}
        />
      </li>
      <hr className="sidebar-divider"></hr>
      <div className="sidebar-heading">Add ons</div>
      <li className="nav-item">
        <MenuDropdown
          icon={faFolder}
          text="Pages"
          subtext="custom utitlities"
          data={[
            { id: "1", text: "Login", link: "/login" },
            { id: "2", text: "Register", link: "/register" },
            { id: "3", text: "Forgot password", link: "/forgot-password" },
            { id: "4", text: "404 page", link: "/not-found" },
            { id: "5", text: "Blank page", link: "/blank-page" },
          ]}
        />
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/charts">
          <FontAwesomeIcon
            className="fas fa-fw fa-chart-area"
            icon={faChartArea}
          />
          <span> Charts</span>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/tables">
          <FontAwesomeIcon className="fas fa-fw fa-chart-area" icon={faTable} />
          <span> Tables</span>
        </Link>
      </li>
      <hr className="sidebar-divider d-none d-md-block" />
      <div className="text-center d-none d-md-inline">
        <button
          className="rounded-circle border-0"
          id="sidebarToggle"
          onClick={() => {
            if (toggleSidebar === true) {
              setToggleSidebar(false);
            } else {
              setToggleSidebar(true);
            }
          }}
        ></button>
      </div>
    </div>
  );
}

export default Sidebar;
