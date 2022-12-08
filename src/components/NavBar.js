import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DropdownCenter from "./navbar/DropdownCenter";
import ProfileDropdown from "./navbar/ProfileDropdown";
// import { useState } from "react";

function NavBar() {
  //   const [toggle, setToggle] = useState("");
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* <!-- Sidebar Toggle (Topbar) -->  */}
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      {/* <!-- Topbar Search -->  */}
      <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light border-0 small"
            placeholder="Search for..."
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </form>

      {/* <!-- Topbar Navbar -->  */}
      <ul className="navbar-nav ml-auto">
        {/* <!-- Nav Item - Search Dropdown (Visible Only XS) -->  */}
        <li className="nav-item dropdown no-arrow d-sm-none">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="searchDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faSearch} className="fas fa-fw" />
          </Link>
          {/* <!-- Dropdown - Messages -->  */}
          <div
            className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
            aria-labelledby="searchDropdown"
          >
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <FontAwesomeIcon icon={faSearch} className="fas fa-sm" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        {/* <!-- Nav Item - Alerts -->  */}
        <li className="nav-item dropdown no-arrow mx-1">
          <DropdownCenter icon={faBell} title="Alert" />
        </li>

        {/* <!-- Nav Item - Messages -->  */}
        <li className="nav-item dropdown no-arrow mx-1">
          <DropdownCenter icon={faEnvelope} title="Message" />
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        {/* <!-- Nav Item - User Information -->  */}
        <li className="nav-item dropdown no-arrow">
          <ProfileDropdown />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
