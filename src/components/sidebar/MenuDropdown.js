import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function MenuDropdown({ icon, text, subtext, data }) {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Link
        className="nav-link collapsed"
        to="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
        onClick={(e) => {
          e.preventDefault();
          if (toggle === true) {
            setToggle(false);
          } else {
            setToggle(true);
          }
        }}
      >
        <FontAwesomeIcon className="fas fa-fw" icon={icon} />
        <span> {text}</span>
      </Link>
      <div
        className={toggle ? "collapse show" : "collapse"}
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded text-left">
          <h6 className="collapse-header">{subtext}</h6>
          {data
            ? data.map(function (itm) {
                // console.log(itm);
                return (
                  <NavLink
                    key={itm.id}
                    className="collapse-item active"
                    to={itm.link}
                  >
                    {itm.text}
                  </NavLink>
                );
              })
            : ""}
          {/* <NavLink className="collapse-item active" to="/#">
            Buttons
          </NavLink>
          <NavLink className="collapse-item" to="/#">
            Cards
          </NavLink> */}
        </div>
      </div>
    </>
  );
}

export default MenuDropdown;
