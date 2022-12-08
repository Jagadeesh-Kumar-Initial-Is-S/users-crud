import LayoutCard from "./../layout/LayoutCard";
import PageTitle from "../components/PageTitle";
function Animations() {
  return (
    <>
      <PageTitle title="Animations">
        Bootstrap's default utility classes can be found on the official{" "}
        <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
        page. The custom utilities below were created to extend this theme past
        the default utility classes built into Bootstrap's framework.
      </PageTitle>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <LayoutCard title="Grow In Animation Utilty">
            <div className="mb-3">
              <code>.animated--grow-in</code>
            </div>
            <div className="small mb-1">Navbar Dropdown Example:</div>
            <nav className="navbar navbar-expand navbar-light bg-light mb-4">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right animated--grow-in"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            <p className="mb-0 small">
              Note: This utility animates the CSS transform property, meaning it
              will override any existing transforms on an element being
              animated! In this theme, the grow in animation is only being used
              on dropdowns within the navbar.
            </p>
          </LayoutCard>
        </div>
        <div className="col-lg-6 mb-4">
          <LayoutCard title="Fade In Animation Utilty">
            <div className="mb-3">
              <code>.animated--grow-in</code>
            </div>
            <div className="small mb-1">Navbar Dropdown Example:</div>
            <nav className="navbar navbar-expand navbar-light bg-light mb-4">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right animated--grow-in"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            <p className="mb-0 small">Dropdown Button Example:</p>
            <div className="dropdown mb-4">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <div
                className="dropdown-menu animated--fade-in"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
            <p className="mb-0 small">
              Note: This utility animates the CSS opacity property, meaning it
              will override any existing opacity on an element being animated!
            </p>
          </LayoutCard>
        </div>
      </div>
    </>
  );
}

export default Animations;
