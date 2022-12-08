import { useState } from "react";
import { Link } from "react-router-dom";
function LayoutCardCollapsible({ children, title }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="card shadow mb-4 text-left">
      <div className="card-header py-1" style={{ borderBottom: "none" }}>
        <Link
          to="#collapseCardExample"
          className="d-block card-header py-3"
          data-toggle="collapse"
          role="button"
          aria-expanded="true"
          aria-controls="collapseCardExample"
          onClick={(e) => {
            e.preventDefault();
            if (toggle === true) {
              setToggle(false);
            } else {
              setToggle(true);
            }
          }}
        >
          <h6 className="m-0 font-weight-bold text-primary">{title}</h6>
        </Link>
      </div>
      <div className={toggle ? "collapse show" : "collapse"}>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}

export default LayoutCardCollapsible;
