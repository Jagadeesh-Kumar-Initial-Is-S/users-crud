import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCogs,
  faList,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function ProfileDropdown() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Link
        className="nav-link dropdown-toggle"
        to="#"
        id="userDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={(e) => {
          e.preventDefault();
          if (toggle === true) {
            setToggle(false);
          } else {
            setToggle(true);
          }
        }}
      >
        <span className="mr-2 d-none d-lg-inline text-gray-600 small">
          Douglas McGee
        </span>
        <img
          className="img-profile rounded-circle"
          src="img/undraw_profile.svg"
        />
      </Link>
      {/* <!-- Dropdown - User Information -->  */}
      <div
        className={
          toggle
            ? "dropdown-menu dropdown-menu dropdown-menu-right shadow animated--grow-in show"
            : "dropdown-menu dropdown-menu dropdown-menu-right shadow animated--grow-in"
        }
        aria-labelledby="userDropdown"
      >
        <Link className="dropdown-item" to="#">
          <FontAwesomeIcon
            icon={faUser}
            className="fa-sm fa-fw mr-2 text-gray-400"
          />
          Profile
        </Link>
        <Link className="dropdown-item" to="#">
          <FontAwesomeIcon
            icon={faCogs}
            className="fa-sm fa-fw mr-2 text-gray-400"
          />
          Settings
        </Link>
        <Link className="dropdown-item" to="#">
          <FontAwesomeIcon
            icon={faList}
            className="fa-sm fa-fw mr-2 text-gray-400"
          />
          Activity Log
        </Link>
        <div className="dropdown-divider"></div>
        <Link
          className="dropdown-item"
          to="#"
          data-toggle="modal"
          data-target="#logoutModal"
        >
          <FontAwesomeIcon
            icon={faSignOut}
            className="fa-sm fa-fw mr-2 text-gray-400"
          />
          Logout
        </Link>
      </div>
    </>
  );
}

export default ProfileDropdown;
