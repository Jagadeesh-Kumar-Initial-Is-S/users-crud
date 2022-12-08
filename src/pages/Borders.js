import BorderCard from "../components/borders/BorderCard";
import PageTitle from "../components/PageTitle";

function Borders() {
  return (
    <>
      <PageTitle title="Borders">
        Bootstrap's default utility classes can be found on the official{" "}
        <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
        page. The custom utilities below were created to extend this theme past
        the default utility classes built into Bootstrap's framework.
      </PageTitle>
      <div className="row">
        {/* <!-- Border Left Utilities --> */}
        <div className="col-lg-6">
          <BorderCard pos="left" color="primary" />
          <BorderCard pos="left" color="secondary" />
          <BorderCard pos="left" color="success" />
          <BorderCard pos="left" color="info" />
          <BorderCard pos="left" color="warning" />
          <BorderCard pos="left" color="danger" />
          <BorderCard pos="left" color="dark" />
        </div>
        <div className="col-lg-6">
          <BorderCard pos="bottom" color="primary" />
          <BorderCard pos="bottom" color="secondary" />
          <BorderCard pos="bottom" color="success" />
          <BorderCard pos="bottom" color="info" />
          <BorderCard pos="bottom" color="warning" />
          <BorderCard pos="bottom" color="danger" />
          <BorderCard pos="bottom" color="dark" />
        </div>
      </div>
    </>
  );
}

export default Borders;
