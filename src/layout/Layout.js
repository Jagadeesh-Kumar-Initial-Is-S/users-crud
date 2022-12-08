import Sidebar from "../components/Sidebar";
import NavBar from "../components/NavBar";

function Layout({ children }) {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <NavBar />
        <div className="container-fluid">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
